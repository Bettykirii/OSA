import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Router, Route, Switch } from 'react-router-dom';
import { OtpProtectedRoute, AllowLoginIfTokenPresent } from '../src/views/pages/protected';
import history from './helpers/routeUtils';
import './scss/style.scss';
import Notifications from 'react-notify-toast';
import NetworkDetector from './NetworkDetector.jsx';

import "moment/locale/en-gb";

// Containers

const theme = createMuiTheme({
  overrides: {
    MuiFormLabel: {
      asterisk: {
        color: '#dc3545',
      }
    }
  },
  palette: {
    primary: {
      main: '#002868',
    },
    secondary: {
      main: '#3598DC',
    },
  },
});


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Otp = React.lazy(() => import('./views/pages/login/otp'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));


class App extends Component {
  render() {
    return (


      <Router history={history}>
        <Notifications options={{ zIndex: 300, top: '100px' }} />
        <React.Suspense fallback={loading}>
          <ThemeProvider theme={theme}>
            <Switch>
              <AllowLoginIfTokenPresent
                exact
                path="/"
                name="Login Page"
                component={Login}
              />
              <OtpProtectedRoute
                exact
                path="/verify"
                name="Otp page"
                component={Otp}
              />
              <Route
                exact
                path="/register"
                name="Register Page"
                render={(props) => <Register {...props} />}
              />
              <Route
                exact
                path="/404"
                name="Page 404"
                render={(props) => <Page404 {...props} />}
              />
              <Route
                exact
                path="/500"
                name="Page 500"
                render={(props) => <Page500 {...props} />}
              />
              <Route path="/" name="Home" render={(props) => <TheLayout {...props} />} />
            </Switch>
          </ThemeProvider>
        </React.Suspense>
      </Router>

    );
  }
}

export default NetworkDetector(App);
