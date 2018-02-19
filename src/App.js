import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './routes/Home'
import List from './routes/List'
import WriteMenu from './routes/WriteMenu'
import Header from './components/Header'
import Write from './components/Write'
import View from './routes/View'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <div>
            <Route exact path='/' component={Home}/>
            <Route path='/list' component={List}/>
            <Route path='/view' component={View}/>
            <Route path='/write' component={WriteMenu}/>
            <Route path='/write' component={Write}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
