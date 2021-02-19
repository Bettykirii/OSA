import React from 'react';
import './tasks.scss';

import axios from 'axios';
import history from '../../helpers/routeUtils';
import { Form, Icon, Input, Button, Row } from 'antd';


console.clear();


const token = localStorage.getItem("token");
class Tasks extends React.Component {
   onSubmit = async (event) => { 

    event.preventDefault();
      this.props.form.validateFields( async(err, { brandname, keyword ,template }) => {
        if (!err) {
        try{
            const config = {
                headers: { Authorization: `Token ${token}` }
            };
            let response = await axios.post('https://pacific-castle-48199.herokuapp.com/https://tunde.herokuapp.com/api/v1/tasks/',config,{

             brandname,
             keyword,
             template,
              },
            );
            

            console.log('Rask Post Status: ',response.data)
            history.push('/tasks')
        }catch (err){
            console.log('Task Post error: ',err)
        }
          
    }
  });
}


   render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <>
        <Row
          type="flex"
          justify="center"
          align="middle"
        >
        <Form onSubmit={this.onSubmit} className="login-form" layout="vertical">
           <Form.Item label="Brand Name">
             {getFieldDecorator('brandname', {
               rules: [
                 { required: true, message: 'Please enter the brandname' }
               ]
             })(
               <Input
                 prefix={
                   <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>
                 }
                 placeholder="person@company.com"
                 className="textfield"
                 autoFocus
               />
             )}
           </Form.Item>
           <Form.Item label="KeyWord">
             {getFieldDecorator('keyword', {
               rules: [{ required: true, message: 'Please enter the keyword' }]
             })(
               <Input
                 prefix={
                   <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>
                 }
                
                 placeholder="Keyword"
                 className="textfield"
               />
             )}
           </Form.Item>
           <Form.Item label="Template">
             {getFieldDecorator('template', {
               rules: [{ required: true, message: 'Please enter the template' }]
             })(
               <Input
                 prefix={
                   <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>
                 }
                
                 placeholder="template"
                 className="textfield"
               />
             )}
           </Form.Item>
           <Form.Item>
             <Row type="flex" justify="center" align="middle">
               <Button
                 type="primary"
                 htmlType="submit"
                 className="textfield"
               >
                 Submit
               </Button>
             </Row>
           </Form.Item>
         </Form>
         </Row>
        </>
      );
   }
}
export default Form.create({ name: 'tasks' })(Tasks);
