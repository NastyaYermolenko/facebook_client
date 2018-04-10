import React, {Component} from 'react';
import FacebookProvider from 'react-facebook';

export default class Example extends Component {

    render() {
        return (
            <FacebookProvider>
                <h1>HI, {JSON.parse(localStorage['user']).profile.first_name}</h1>

            </FacebookProvider>
        );
    }
}