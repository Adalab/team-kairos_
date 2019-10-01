import React from 'react';
import {Link} from 'react-router-dom';
import Form1NewProject from './Form1NewProject';
import '../styles/NewProcess.scss';

const NewProcess = props => {
  return (
    <main className="main__new-process">
      <form action="">
        <Form1NewProject />
        <div className="new-process__button-container">
          <Link to="/developerlist"><button className="create__button" type="submit">Iniciar Proceso</button></Link>
        </div>
      </form>
    </main>
  );
}
export default NewProcess;