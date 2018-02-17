import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom';

const Post = ({match}) => {
  return(
    <div>
      {match.params.title}
    </div>
  );
}


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
