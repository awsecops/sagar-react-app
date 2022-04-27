// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import './antd.css';
import './app-gloabal.scss';
import App from './App.jsx';
import ReactDOM from 'react-dom';
import React from 'react';
import {StoreProvider} from "store-app/store";



ReactDOM.render(<StoreProvider><App /></StoreProvider>, document.getElementById('app'));
