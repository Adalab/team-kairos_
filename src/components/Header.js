import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Header.scss';

const Header = props => {
  
  const {user} = props;
  //console.log(user);
  return (
    <header className="header">
      <div className="header__logo">
        <img src="https://www.kairosds.com/wp-content/uploads/2016/05/logo-general.png" alt="logo-kairos" className="header__img" />
      </div>
      <div className="header__logo-user">
        <p className="user">{(user.email)? user.email : `user`}</p>
        <i className="fas fa-user-alt"></i>
      </div>
    </header>
  );
};
Header.propTypes = {
 user: PropTypes.object.isRequired,
};

export default Header;