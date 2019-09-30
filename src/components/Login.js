import React from 'react';
import '../styles/Login.scss';


const Login = props => {


    return (
        <main className="main__login">
            <div className="login__email-container">
            <label htmlFor="email">Introduce tu email</label>
            <input className="email" type="text" id="email" name="email"/>
            </div>
            <div className="login__rol-container">
                <label for="rol">Rol</label>
                <select id="rol" name="rol">
                    <option value="head">head</option>
                    <option value="operaciones">operaciones</option>
                    <option value="talento">talento</option>
                    <option value="embajada">embajada</option>
                </select>
            </div>
        </main>
    );
};

export default Login;