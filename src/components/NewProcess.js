import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Form1NewProject from './Form1NewProject';
import '../styles/NewProcess.scss';

const NewProcess = props => {
  const {changeSteps} = props;
  return (
    <main className="main__new-process">
      <form action="">
        <Form1NewProject />
        <div className="new-process__button-container">
          <Link to="/developerlist"><button className="create__button" type="submit" onClick={changeSteps}>Iniciar Proceso</button></Link>
        </div>
      </form>
    </main>
  );
}
NewProcess.propTypes = {
  changeSteps: PropTypes.func.isRequired,
}
export default NewProcess;