import React, { Component } from 'react'

import { Table } from 'antd';



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
export default class Reports extends Component {

    data = {}

    getSelected(record){   
        this.data = record 
        console.log('From Taks', record)
        console.log('From Taks', this.data)
    }

    componentDidMount(){}


    render() {
        return (
            <>
               {/* <Table dataSource={data} columns={columns} />;  */}
               <h1>Home</h1>
               <h1>{this.data.name}</h1>
               <h2>{this.data.email}</h2>
            </>
        )
    }
}
