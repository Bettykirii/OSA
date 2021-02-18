import React, { Component } from 'react'

import { Table } from 'antd';
import axios from 'axios';
import history from '../../helpers/routeUtils';
import Reports from './Reports'
// import { useHistory } from "react-router-dom";

const columns = [
  {
    title: 'BrandName ',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Keyword ',
    dataIndex: 'username',
    key: 'username',
    responsive: ['md'],
  },
  {
    title: 'Template ',
    dataIndex: 'email',
    key: 'email',
    responsive: ['lg'],
  },
];

// const data = [
//   {
//     key: '1',
//     brandName: 'John Brown',
//     keyword: 32,
//     template: 'New York No. 1 Lake Park',
//   },
// ];
export default class Tasks extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const data = res.data;
            console.log(data[0])
            this.setState({ data });
          })
      }
    
    clicked() {

    }

    render() {
        return (
            <>
               <Table dataSource={this.state.data} rowKey="id" columns={columns} 
                    onRow={(record) => ({ 
                        onClick: () => { 
                            console.log(record)  
                            const repots = new Reports(); 
                            repots.getSelected(record)                         
                            history.push('/reports');
                        } 
                      })}
               />; 
            </>
        )
    }
}
