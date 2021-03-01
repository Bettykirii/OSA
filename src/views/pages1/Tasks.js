import React from 'react';
import './tasks.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import history from '../../helpers/routeUtils';
import { Form, Icon, Input, Button, Row, Table } from 'antd';

console.clear();
const token = localStorage.getItem('token');
let dataSource;
async function getTasks() {
    const tasksresp = await axios.get(
        `https://pacific-castle-48199.herokuapp.com/https://tunde.herokuapp.com/api/v1/tasks/`,
        {
            headers: {
                Authorization: `Token ${token}`,
            },
        }
    );
    console.log(tasksresp.data);
    console.log();
    dataSource = tasksresp.data;
}

const columns = [
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (record, rowIndex) => (
            <a>
                <Button
                    style={{ display: 'flex', borderColor: 'transparent' }}
                    className="button"
                    onClick={() => {
                        history.push({
                            pathname: `/reports/${record._id}`,
                            state: { taskDetail: record },
                        });
                    }}
                >
                    <Icon className="eyeIcon" type="eye" theme="filled" />
                    <p className="iconText">view</p>
                </Button>
            </a>
        ),
    },
    {
        title: 'Brand Name',
        dataIndex: 'brandName',
        key: 'brandName',
    },
    {
        title: 'Key Word',
        dataIndex: 'keyword',
        key: 'keyword',
    },
    {
        title: 'Template',
        dataIndex: 'template',
        key: 'template',
    },
];
class Tasks extends React.Component {
    componentDidMount() {
        getTasks();
    }
    render() {
        return (
            <>
                <Link to="/tasks-form">
                    <Button type="primary">
                        <Icon type="plus" />
                        New
                    </Button>
                </Link>{' '}
                <Table dataSource={dataSource} columns={columns} />
            </>
        );
    }
}
export default Form.create({ name: 'tasks' })(Tasks);