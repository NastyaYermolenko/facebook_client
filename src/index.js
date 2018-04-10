import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FacebookProvider from 'react-facebook';
import MainPage from "./Routing";

FacebookProvider.defaultProps.appId = '157340318279164';

ReactDOM.render(<MainPage/>, document.getElementById("root"));
