import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <div className="mainNavigation">
        <Link to='/'>Home</Link>
        <Link to='/list'>Student List</Link>
        <h4> Click on Student List Link to see the result </h4>
      </div>
    );
  }
}
