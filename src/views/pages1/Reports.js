import React from 'react';
import './tasks.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import history from '../../helpers/routeUtils';
import { Form, Icon, Input, Button, Row, Table } from 'antd';


console.clear();
const token = localStorage.getItem("token");
let dataSource;

const columns = [
    {
       
        render: (record, rowIndex) => (
            <a>

            </a>
        ),
    },
    {
        title: 'Likes',
        dataIndex: 'likes',
        key: 'likes',
    },
    {
        title: 'Links',
        dataIndex: 'link',
        key: 'link',
    },
    {
        title: 'Comments',
        dataIndex: 'comments',
        key: 'comments',
    },
    {
        title: 'Mentions',
        dataIndex: 'mentions',
        key: 'mentions',
    }
];
class Reports extends React.Component {
    async getReports() {
        const reportsresp = await axios.get(`https://pacific-castle-48199.herokuapp.com/https://tunde.herokuapp.com/api/v1/reports/${this.props.history.location.state.taskDetail._id}`, {
        headers: {
            Authorization: `Token ${token}`,
        },
    });
    console.log(reportsresp.data);
    dataSource = reportsresp.data;
}

    componentDidMount() {
        this.getReports();
    }
    render() {
        return (
            <>
                <p>Reports</p>
                <Table dataSource={dataSource} columns={columns} />


            </>
        );
    }
}
export default Form.create({ name: 'reports' })(Reports);