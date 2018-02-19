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

export default Post