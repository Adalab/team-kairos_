import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Form1NewProject from './Form1NewProject';
import '../styles/NewProcess.scss';

const NewProcess = props => {
  const {createProject,rol} = props;
  return (
    <main className="main__new-process">
      <form action="">
        <Form1NewProject rol={rol} />
        <div className="new-process__button-container">
          <Link to="/developerlist"><button className="create__button" type="submit" id="headfirst" onClick={createProject}>Confirmar</button></Link>
        </div>
      </form>
    </main>
  );
}
NewProcess.propTypes = {
  changeSteps: PropTypes.func.isRequired,
  rol: PropTypes.string.isRequired
}
export default NewProcess;