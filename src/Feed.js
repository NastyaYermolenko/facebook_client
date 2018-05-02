import React, {Component} from 'react';
import FacebookProvider, {EmbeddedPost} from 'react-facebook';
import {
    withRouter
} from "react-router-dom";


class FeedList extends Component {
    constructor (props) {
        super(props);
        this.state = { data: [] };
    }

    componentWillMount() {
        let accessToken = JSON.parse(localStorage['user']).tokenDetail.accessToken;
        let dataResposne = [];
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", 'https://graph.facebook.com/v2.12/me/feed?fields=permalink_url&access_token='
            + accessToken, false ); // false for synchronous request
        xmlHttp.send( null );

        let dataArray = JSON.parse(xmlHttp.response).data;
        if (dataArray) {
            for (let i = 0; i < dataArray.length; i++) {
                dataResposne.push(dataArray[i].permalink_url);
            }
            this.setState({data: dataResposne});
        }

    }
    render() {

        return (
            <FacebookProvider>
                <div className="row">
                <h1 className="col">News</h1>
                <h1><a className="col align-self-center badge badge-light" href="/profile">My profile</a></h1>
                </div>
                <br/>
                <div className="float-right">

                    {
                        this.state.data.length?
                            this.state.data.map(d => <EmbeddedPost key={d} href={d}/>) :
                            console.log("There are no posts :c")
                    }

                </div>
            </FacebookProvider>
        );
    }
}

export default withRouter(FeedList);
