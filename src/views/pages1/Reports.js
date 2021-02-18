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

const data = [
  {
    key: '1',
    brandName: 'John Brown',
    keyword: 32,
    template: 'New York No. 1 Lake Park',
  },
];
export default class Reports extends Component {
    
    render() {
        return (
            <>
               <Table dataSource={data} columns={columns} />; 
            </>
        )
    }
}
