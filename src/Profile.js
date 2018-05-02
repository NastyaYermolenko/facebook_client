import React, {Component} from 'react';
import FacebookProvider from 'react-facebook';
import Facebook, { EmbeddedPost } from "react-facebook";


export default class Profile extends Component {

    constructor (props) {
        super(props);
        this.state = { data: [] };
    }

    componentWillMount() {
        let accessToken = JSON.parse(localStorage['user']).tokenDetail.accessToken;
        let dataResposne = [];
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", 'https://graph.facebook.com/v2.12/me/posts?fields=permalink_url&access_token='
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

    logout(){
        Facebook.logout;
        localStorage.removeItem("user");
        localStorage.removeItem("login_date");
    }
    render() {

        let profile = JSON.parse(localStorage['user']).profile;
        let img_src = 'https://graph.facebook.com/v2.12/'+profile.id+'/picture/?type=large';

        return (
            <FacebookProvider>
                <div className="row">
                    <div className="col-sm">
                        <img src={img_src} alt="profile" className="rounded float-left"/>
                    </div>
                    <div className="col-sm">
                        <h1>{profile.name}</h1>
                        <a href={profile.link} target="_blank">Go to my profile on Facebook!</a>
                        <div className="row">
                            <a className="list-group-item list-group-item-action col-sm-6" href="/feed">Feeds</a>
                            <a className="list-group-item list-group-item-action col-sm-6" href="/login" onClick={this.logout}>Log out</a>

                        </div>
                    </div>
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