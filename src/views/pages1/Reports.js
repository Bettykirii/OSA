// import React, { Component } from 'react'
// import axios from 'axios'
// // import ReactTable from "react-table"; 
// // import 'react-table/react-table.css'
// const token = localStorage.getItem("token");

// export default class Reports extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       users: [],
//       loading:true
//     }
//   }
//   async getUsersData(){
//     const res = await axios.get('https://pacific-castle-48199.herokuapp.com/https://tunde.herokuapp.com/api/v1/reports', {
//         headers: {
//             Authorization: `Token ${token}`,
//         },
//     console.log(res.data)
//     this.setState({loading:false, users: res.data})
//   }
//   componentDidMount(){
//     this.getUsersData()
//   }
//   render() {
//     const columns = [{  
//       Header: 'ID',  
//       accessor: 'id',
//      }
//      ,{  
//       Header: 'Name',  
//       accessor: 'name' ,
//       }
     
//      ,{  
//      Header: 'Username',  
//      accessor: 'username' ,
//      }
//      ,{  
//      Header: 'Phone',  
//      accessor: 'phone',
//      },
//      {  
//       Header: 'Email',  
//       accessor: 'email',
//       },
//       {  
//         Header: 'Website',  
//         accessor: 'website',
//         }
//   ]
//     return (
// //       <ReactTable  
// //       data={this.state.users}  
// //       columns={columns}  
// //    />
// <>
// <p>reports</p>
// </>
//     )
//   }
// }