import React from 'react';


const Tasks = React.lazy(() => import('../src/views/pages1/Tasks'));
const Reports =React.lazy(() => import('../src/views/pages1/Reports'))
const TasksForm =React.lazy(() => import('../src/views/pages1/TasksForm'))

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/tasks', component:Tasks,exact: true, name: 'Tasks' },
    { path: '/reports/:id', component:Reports,exact: true, name: 'Reports' },
    { path: '/tasks-form', component:TasksForm,exact: true, name: 'TasksForm' },






    
];

export default routes;
