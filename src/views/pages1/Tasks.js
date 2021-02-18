import React, { Component } from 'react'

import { Table } from 'antd';
import axios from 'axios';



const columns = [
  {
    title: 'BrandName ',
    dataIndex: 'brandName',
    key: 'brandName',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Keyword ',
    dataIndex: 'keyword',
    key: 'keyword',
    responsive: ['md'],
  },
  {
    title: 'Template ',
    dataIndex: 'template',
    key: 'template',
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
            console.log(data)
            this.setState({ data });
          })
      }

    render() {
        return (
            <>
               <Table dataSource={this.state.data} columns={columns} />; 
            </>
        )
    }
}
