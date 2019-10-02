import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Form1NewProject from './Form1NewProject';
import '../styles/NewProcess.scss';

const NewProcess = props => {
  const {createProject,rol,getUserData} = props;
  return (
    <main className="main__new-process">
        <Form1NewProject 
        rol={rol} 
        getUserData={getUserData} 
        createProject={createProject}
        />
        <div className="new-process__button-container">
          <Link to="/developerlist">Volver</Link>
      </div>
    </main>
  );
}
NewProcess.propTypes = {
  steps: PropTypes.object.isRequired,
  getUserData: PropTypes.func.isRequired,
  createProject: PropTypes.func.isRequired,
  rol: PropTypes.string.isRequired
}
export default NewProcess;