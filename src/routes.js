import React from 'react';


const Tasks = React.lazy(() => import('../src/views/pages1/Tasks'));

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/tasks', component:Tasks,exact: true, name: 'Tasks' },


    
];

export default routes;
