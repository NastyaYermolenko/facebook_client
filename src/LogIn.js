import React, { Component } from 'react';
import FacebookProvider, { Login } from 'react-facebook';
import {
    withRouter
} from "react-router-dom";

class LogIn extends Component {
    handleResponse = (data) => {
        console.log(data);
        localStorage.setItem('user', JSON.stringify(data));
        this.props.history.push("/feed");
    };

    handleError = (error) => {
        this.setState({ error });
    };

    render() {
        return (
            <FacebookProvider>
                <Login
                    scope="email"
                    onResponse={this.handleResponse}
                    onError={this.handleError}
                >
                    <span>Login via Facebook</span>
                </Login>
            </FacebookProvider>
        );
    }
}

export default withRouter(LogIn);
