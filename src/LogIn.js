import React, { Component } from 'react';
import FacebookProvider, { Login } from 'react-facebook';
import {
    withRouter
} from "react-router-dom";

class LogIn extends Component {
    handleResponse = (data) => {
        localStorage.setItem('user', JSON.stringify(data));
        localStorage.setItem('login_date', new Date());
        this.props.history.push("/feed");
    };

    handleError = (error) => {
        this.setState({ error });
    };

    render() {
        return (
            <FacebookProvider>
                <Login
                    scope="email, user_posts, user_photos"
                    onResponse={this.handleResponse}
                    onError={this.handleError}
                >
                    <button type="button" className="btn btn-primary">Login via Facebook</button>
                </Login>
            </FacebookProvider>
        );
    }
}

export default withRouter(LogIn);
