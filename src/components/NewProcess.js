import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Form1NewProject from './Form1NewProject';
import '../styles/NewProcess.scss';

const NewProcess = props => {
  const {createProject,rol,getUserData,steps,resetStep} = props;
  // const steps = {
  //   headfirst: false
  // }
  return (
    <main className="main__new-process">
        <Form1NewProject
        steps = {steps} 
        rol={rol} 
        getUserData={getUserData} 
        createProject={createProject}
        />
        <div className="new-process__button-container">
          <Link to="/developerlist" onClick={resetStep}>Ir al listado</Link>
      </div>
    </main>
  );
}
NewProcess.propTypes = {
  getUserData: PropTypes.func.isRequired,
  createProject: PropTypes.func.isRequired,
  rol: PropTypes.string.isRequired,
  resetStep: PropTypes.func.isRequired,
}
export default NewProcess;