import React from 'react';
import CIcon from '@coreui/icons-react';

const _nav = [
    {
        _tag: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: <CIcon name="cil-home" customClasses="c-sidebar-nav-icon" />,
    },
    {
        _tag: 'CSidebarNavItem',
        className: 'Tasks',
        name: 'Tasks',
        to: '/tasks',
        icon: <CIcon name="cib-addthis" customClasses="c-sidebar-nav-icon" />,
    },
    {
        _tag: 'CSidebarNavItem',
        className: 'Reports',
        name: 'Reports',
        to: '/reports',
        icon: <CIcon name="cil-inbox" customClasses="c-sidebar-nav-icon" />,
    },
   
    
   
];

export default _nav;
