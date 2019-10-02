import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

const Header = props => {

  const { email, logged } = props;

  return (
    <header className="header">
      <Link to="/developerlist">
        <div className="header__logo">
          <img src="https://www.kairosds.com/wp-content/uploads/2016/05/logo-general.png" alt="logo-kairos" className="header__img" />
        </div>
      </Link>
      <div className="header__logo-user">
        <p className="user">{(logged) ? email : `user`}</p>
        <i className="fas fa-user-alt"></i>
      </div>
    </header>
  );
};
Header.propTypes = {
  logged: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
};

export default Header;