import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">
            E-commerce
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
