import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'
import './sidebar.scss'

import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({ type: 'set', sidebarShow: val })}
      className="sidebar-styles"
    >
      <CSidebarBrand className="d-md-down-none" to="/dashboard">
        <CIcon
          className="c-sidebar-brand-full"
          // name="logo-negative"
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized logo-side"
          src="logos/logolra.svg" alt="main-logo"
          height={35}
        /> 
      </CSidebarBrand>
      <CSidebarNav className="sidebar-nav">

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
