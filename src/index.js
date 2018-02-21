import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';

import { createStore } from 'redux'
import reducers from './reducers/Write'
import { Provider } from 'react-redux';

ReactDOM.render(
        <App />, 
document.getElementById('root'));
registerServiceWorker();
