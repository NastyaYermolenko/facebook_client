import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from "react-router-dom";
import Feed from "./Feed";
import LogIn from "./LogIn";
import Profile from "./Profile";


class Routing extends Component {

    isLoggedIn(){
        return localStorage.getItem('user') &&
            Date.now() - Date.parse(localStorage.getItem("login_date")) <= 3*60*60*1000;
    }
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" render={() => (
                        this.isLoggedIn() ?
                            (<Redirect to="/feed"/>)
                            : (<Redirect to="/login"/>)
                    )}/>

                    <Route path="/feed" render={() => (
                        this.isLoggedIn() ?
                                (<Feed/>)
                            : (<Redirect to="/login"/>))}/>
                    <Route path="/login" render={() => (
                        this.isLoggedIn() ?
                            (<Redirect to="/feed"/>)
                            : (<LogIn/>))}/>

                    <Route path="/profile" render={() => (
                        this.isLoggedIn() ?
                            (<Profile/>)
                            : (<Redirect to="/login"/>))}/>
                </div>
            </Router>

        );
    }
}

export default Routing;