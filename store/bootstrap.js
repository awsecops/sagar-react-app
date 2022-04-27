
import ReactDOM from 'react-dom';
import React from 'react';
import App from './src/App';
import {StoreProvider} from  './src/store' 
ReactDOM.render(<StoreProvider><App /></StoreProvider>, document.getElementById('app'));
