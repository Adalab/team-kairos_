import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Login.scss';

const Login = props => {

  const { email, getUserData, login, transitionToMain } = props;


  return (
    <main className="main__login">
      <form className="main__login-container" onSubmit={transitionToMain}>
        <div className="login__email-container">
          <label className="label__mail" htmlFor="email">Introduce tu email</label>
          <input className="email" type="text" id="email" name="email" onChange={getUserData} value={email} required />
        </div>
        <div className="login__rol-container">
          <label htmlFor="rol"></label>
          <select className="login__select" id="rol" name="rol" onChange={getUserData} required >
            <option value="">rol</option>
            <option value="head">head</option>
            <option value="operations">operaciones</option>
            <option value="talent">talento</option>
            <option value="ambassador">embajada</option>
          </select>
        </div>
        <div className="login__button-container">
         <input  className="btn" onClick={login} type="submit"  value="Entrar"/>
        </div>
      </form>

    </main>
  );
};

Login.propTypes = {
  transitionToMain: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  getUserData: PropTypes.func.isRequired
}

export default Login;