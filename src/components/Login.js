import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Login.scss';
import { Link } from 'react-router-dom';


const Login = props => {

  const { email, getUserData, login } = props;

  return (
    <main className="main__login">
      <form>
        <div className="login__email-container">
          <label htmlFor="email">Introduce tu email</label>
          <input className="email" type="text" id="email" name="email" onChange={getUserData} value={email} />
        </div>
        <div className="login__rol-container">
          <label htmlFor="rol"></label>
          <select id="rol" name="rol" onChange={getUserData}>
            <option value="">Rol</option>
            <option value="head">head</option>
            <option value="operations">operaciones</option>
            <option value="talent">talento</option>
            <option value="ambassador">embajada</option>
          </select>
        </div>
        <div className="login__button-container">
          <Link to="/developerlist"><button className="login__button" onClick={login} type="submit">Entrar</button></Link>
        </div>
      </form>

    </main>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  getUserData: PropTypes.func.isRequired
}

export default Login;