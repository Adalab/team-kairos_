import React from 'react';
import '../styles/Header.scss';

const Header = props => {


  return (
    <header className="header">
      <div className="header__logo">
        <img src="https://www.kairosds.com/wp-content/uploads/2016/05/logo-general.png" alt="logo-kairos" className="header__img" />
      </div>

      <div className="header__logo-user">
        <p className="user">USUARIO</p>
        <i className="fas fa-user-alt"></i>
      </div>
    </header>
  );
};

export default Header;