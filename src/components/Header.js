import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return(
    <div className="header">
      <Link to="/list" className="item">
      <Button color="secondary">List</Button>
      </Link>
      <Link to="/write" className="item">
      <Button color="secondary">Write</Button>
      </Link>
    </div>
  );
}

export default Header
