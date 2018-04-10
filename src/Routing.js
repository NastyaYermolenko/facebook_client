import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from "react-router-dom";
import Feed from "./Feed";
import LogIn from "./LogIn";


class Routing extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" render={() => (
                        localStorage.getItem('user') ? (<Redirect to="/feed"/>)
                            : (<Redirect to="/login"/>)
                    )}/>

                    <Route path="/feed" render={() => (
                        localStorage.getItem('user') ?
                            (<Feed/>)
                            : (<Redirect to="/login"/>))}/>
                    <Route path="/login" render={() => (
                        localStorage.getItem('user') ?
                            (<Redirect to="/feed"/>)
                            : (<LogIn/>))}/>
                </div>
            </Router>

        );
    }
}

export default Routing;