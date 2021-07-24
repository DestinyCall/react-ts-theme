import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link to={'/'} className='left brand-logo'>
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <ul className='right'>This is Page Header</ul>
        </div>
      </nav>
    );
  }
}

export default Header;
