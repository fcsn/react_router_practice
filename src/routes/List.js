import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom';
import Post from './Post';

const List = () => {
  return(
    <div>
      <Link to="/list/a">ccc</Link>
      <Link to="/list/b">b</Link>
      <Route
        path="/list/:title"
        component={Post}
      />
    </div>
  );
}

export default List
