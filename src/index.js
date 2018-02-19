import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';

import { createStore } from 'redux'
import reducers from './reducers/Write'
import { Provider } from 'react-redux';

const store = createStore(reducers);

ReactDOM.render(
<Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();
