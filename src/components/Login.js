import React from 'react';


const Login = props => {


    return (
        <main>
            <label htmlFor="email">Introduce tu email</label>
            <input type="text" id="email" name="email" />
            <label for="rol">Rol</label>
            <select id="rol" name="rol">
                <option value="head">head</option>
                <option value="operaciones">operaciones</option>
                <option value="talento">talento</option>
                <option value="embajada">embajada</option>
            </select>
        </main>
    );
};

export default Login;