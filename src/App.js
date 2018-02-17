import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './routes/Home'
import List from './routes/List'
import Write from './routes/Write'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <div>
            <Route path='/' component={Home}/>
            <Route path='/list' component={List}/>
            <Route path='/write' component={Write}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
