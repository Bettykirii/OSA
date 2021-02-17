import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// routes config
import routes from '../routes'

import { 
  TheHeaderDropdown}  from './index'

const TheHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  return (
      <CHeader withSubheader>
          <CToggler inHeader className="ml-md-3 d-lg-none" onClick={toggleSidebarMobile} />
          <CToggler inHeader className="ml-3 d-md-down-none" onClick={toggleSidebar} />
          <CHeaderBrand className="mx-auto d-lg-none" to="/">
        {/* <img src="logos/miliki-logo-small.png" alt="main-logo" /> */}
        <CIcon
          className="c-sidebar-brand-minimized logo-side"
          src="logos/logolra.svg" alt="main-logo"
        /> 
          </CHeaderBrand>

          <CHeaderNav className="d-md-down-none mr-auto">
              <CHeaderNavItem className="px-3">
                  <CHeaderNavLink to="/dashboard">Dashboard</CHeaderNavLink>
              </CHeaderNavItem>
          </CHeaderNav>

          <CHeaderNav className="px-3">
              <p>{localStorage.getItem('supplier-email')}</p>
              <TheHeaderDropdown />
          </CHeaderNav>

          <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter 
          className="border-0 c-subheader-nav m-0 px-0 px-md-3" 
          routes={routes} 
        />
          <div className="d-md-down-none mfe-2 c-subheader-nav">
            <CLink className="c-subheader-nav-link" to="/new-task">
            <CIcon name="cib-addthis" alt="new-task" />&nbsp;Tasks
            </CLink>
            <CLink 
              className="c-subheader-nav-link" 
              aria-current="page" 
              to="/dashboard"
            >
              <CIcon name="cil-graph" alt="Dashboard" />&nbsp;Dashboard
            </CLink>
            <CLink className="c-subheader-nav-link" to="/inbox">
            <CIcon name="cil-inbox" alt="inbox" />&nbsp;Reports
            </CLink>
          </div>
      </CSubheader>
      </CHeader>
  );
}

export default TheHeader
