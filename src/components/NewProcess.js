import React from 'react';
import {Link} from 'react-router-dom';
import Form1NewProject from './Form1NewProject';

const NewProcess = props => {
  return (
    <main>
      <form action="">
        <Form1NewProject />
        <div className="button__container">
          <Link to="/developerlist"><button className="create__button" type="submit">Iniciar Proceso</button></Link>
        </div>
      </form>
    </main>

  );
}
export default NewProcess;