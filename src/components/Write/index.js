import React from 'react';
import PropTypes from 'prop-types';
import './Write.css';
import { connect } from 'react-redux';
import Write from './Write';

function mapStateToProps(state) {
  const { index, title, contents } = state;
  return{
    index,
    title,
    contents
  };
}

export default connect(mapStateToProps)(Write);