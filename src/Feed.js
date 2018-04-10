import React, {Component} from 'react';
import FacebookProvider from 'react-facebook';
import {
    withRouter
} from "react-router-dom";


class FeedList extends Component {

    render() {
        return (
            <FacebookProvider>
                <h1>Feed for {JSON.parse(localStorage['user']).profile.first_name}</h1>
            </FacebookProvider>
        );
    }
}

export default withRouter(FeedList);
