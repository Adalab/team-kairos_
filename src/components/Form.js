import React from 'react';
import {Link} from 'react-router-dom';
import Form1NewProject from './Form1NewProject';
import Form2Operations from './Form2Operations';
import Form3Ambassador from './Form3Ambassador';
import Form4Talent from './Form4Talent';
import Form5LastCheck from './Form5LastCheck';

const Form = props => {

  return (
    <div className="form__container">
      <form action="/signup" method="post">
        <Form1NewProject />
        <Form2Operations />
        <Form3Ambassador />
        <Form4Talent />
        <Form5LastCheck />
      </form>
      <div className="developer-container">
        <Link to="/developerlist"><button className="developer-button">Volver</button></Link>
      </div>
    </div>

  );
}

export default Form; 