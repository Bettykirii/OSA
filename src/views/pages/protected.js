import React from 'react'
import { Redirect } from 'react-router-dom'

// Class to check if correlationId is present, otherwise redirect to login 
class OtpProtectedRoute extends React.Component {

    render() {
        const Component = this.props.component;
        const isAlreadyAuthenticated = localStorage.getItem('access_token');
        const isCorrelationId = localStorage.getItem('correlationId');

        if (isAlreadyAuthenticated) {
            return <Redirect to={{ pathname: '/dashboard' }} />
        } else {
            return isCorrelationId ? (
                <Component />
            ) : (
                    <Redirect to={{ pathname: '/' }} />
                );
        }
    }
}

// Class to check if user is logged in already and prevent duplicate login
class AllowLoginIfTokenPresent extends React.Component{
    render() {
        const Component = this.props.component;
        const isAlreadyAuthenticated = localStorage.getItem('access_token');

        return isAlreadyAuthenticated ? (
            <Redirect to={{ pathname: '/dashboard' }} />
        ) : (
                <Component />
            );
    }

}

export { OtpProtectedRoute , AllowLoginIfTokenPresent };
