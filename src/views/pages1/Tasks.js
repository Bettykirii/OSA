import React from 'react';
import './tasks.scss';

import axios from 'axios';
import history from '../../helpers/routeUtils';


console.clear();

const { PureComponent } = React;
const token = localStorage.getItem("token");
class Tasks extends PureComponent {
   state = {
      formState: {
         id: '',
         BrandName: "",
         Keyword: "",
         Template: "",
         mode: "submit"
      },
      tasks: [
         {
            id: '',
            BrandName: "",
            Keyword: "",
            Template: "",
            updating: false
         }
      ]
   };

   resetFormState = () => {
      this.setState({
         formState: {
            BrandName: "",
            Keyword: "",
            Template: "",
            mode: "submit",
            id: ""
         }
      });
   };

   onChange = event => {
      this.setState({
         formState: {
            ...this.state.formState,
            [event.target.name]: event.target.value
         }
      });
   };

   onSubmit = async (event) => {
      const { tasks: users, formState } = this.state;
      event.preventDefault();
      const BrandName = event.target.querySelector("input[name='BrandName']")
         .value;
      const Keyword = event.target.querySelector("input[name='Keyword']")
         .value;
      const Template = event.target.querySelector("input[name='Template']").value;
      if (formState.mode === "submit") {
         this.setState({
            users: [
               ...this.state.tasks,
               {
                  BrandName,
                  Keyword,
                  Template,
                  updating: false,
                  id: this.state.tasks[this.state.tasks.length - 1].id + 1
               }
            ]
         });

        try{
            const config = {
                headers: { Authorization: `Token ${token}` }
            };
            let response = await axios.post('https://pacific-castle-48199.herokuapp.com/https://tunde.herokuapp.com/api/v1/tasks/',this.state.tasks,config)

            console.log('Rask Post Status:>>>>>> ',response.data)
            history.push('/tasks')
        }catch (err){
            console.log('Task Post error: ',err)
        }

      } else if (formState.mode === "edit") {
         const index = users.find((user)=> user.id === formState.id).id;
         users[index] = {
                  BrandName,
                  Keyword,
                  Template,
                  updating: false,
                  id: users[index].id
               }
         this.setState({
            users: [...users]
         });
      }

      this.resetFormState();
   };

   updateUser = key => {
      let { tasks: users } = this.state;
      users[key].updating = true;

      this.setState({
         formState: { ...this.state.tasks[key], mode: "edit" },
         users
      });
   };

   deleteUser = key => {
      let { tasks: users } = this.state;
      users.splice(key, 1);
      this.setState({
         users: [...users]
      });
   };

   render() {
      const { tasks: users, formState } = this.state;
      return (
         <div>
            <Form
               formState={formState}
               onChange={this.onChange}
               onSubmit={this.onSubmit}
            />
            <Table
               users={users}
               updateUser={this.updateUser}
               deleteUser={this.deleteUser}
            />
         </div>
      );
   }
}

const Table = ({ users = [], updateUser, deleteUser }) => {
   return (
      <div className="table">
         <div className="table-header">
            <div className="row">
               <div className="column">BrandName</div>
               <div className="column">Keyword</div>
               <div className="column">Template</div>
               <div className="column">Options</div>
            </div>
         </div>
         <div className="table-body">
            {users.map((user, key) => {
               return (
                  <div className={`row ${user.updating ? "updating" : ""}`}>
                     <div className="column">{user.BrandName}</div>
                     <div className="column">{user.Keyword}</div>
                     <div className="column">{user.Template}</div>
                     <div className="column">
                        <button
                           className="icon"
                           onClick={() => updateUser(key)}
                        >
                           <i class="far fa-edit" />
                        </button>
                        <button className="icon">
                           <i
                              class="fas fa-user-minus"
                              onClick={() => deleteUser(key)}
                           />
                        </button>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

const Field = ({ label = "", name = "", value = "", onChange }) => {
   return (
      <div className="field">
         <label htmlFOR={name}>{label}</label>
         <input type="text" name={name} value={value} onChange={onChange} />
      </div>
   );
};

const Form = ({ formState, onChange, onSubmit }) => {
   return (
      <form className="form" onSubmit={onSubmit}>
         <fieldset>
            <Field
               name="BrandName"
               label="Brand name"
               value={formState.BrandName}
               onChange={onChange}
            />
            <Field
               name="Keyword"
               label="Keyword"
               value={formState.Keyword}
               onChange={onChange}
            />
            <Field
               name="Template"
               label="Template"
               value={formState.Template}
               onChange={onChange}
            />
         </fieldset>
         <button>{formState.mode}</button>
      </form>
   );
};

export default Tasks

