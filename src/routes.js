import React from 'react';


const Tasks = React.lazy(() => import('../src/views/pages1/Tasks'));
const Reports =React.lazy(() => import('../src/views/pages1/Reports'))

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/tasks', component:Tasks,exact: true, name: 'Tasks' },
    { path: '/reports', component:Reports,exact: true, name: 'Reports' },




    
];

export default routes;
