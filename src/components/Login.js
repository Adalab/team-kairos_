import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Login.scss';


const Login = props => {

  const { user,getUserData} = props;
  return (
    <main className="main__login">
      <div className="login__email-container">
        <label htmlFor="email">Introduce tu email</label>
        <input className="email" type="text" id="email" name="email" onChange={getUserData} value={user.email}/>
      </div>
      <div className="login__rol-container">
        <label htmlFor="rol">Rol</label>
        <select id="rol" name="rol" onChange={getUserData}>
          <option value="">elige tu rol</option>
          <option value="head">head</option>
          <option value="operaciones">operaciones</option>
          <option value="talento">talento</option>
          <option value="embajada">embajada</option>
        </select>
      </div>
    </main>
  );
};

Login.propTypes = {
  user: PropTypes.object.isRequired,
  getUserData: PropTypes.func.isRequired
}

export default Login;