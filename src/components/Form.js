import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Form1NewProject from './Form1NewProject';
import Form2Operations from './Form2Operations';
import Form4Ambassador from './Form4Ambassador';
import Form3Talent from './Form3Talent';
import Form5LastCheck from './Form5LastCheck';

const Form = props => {
  const {rol, getUserData, changeSteps, steps} = props;
  return (
    <div className="form__container">
     <section>
      <Form1NewProject 
        rol={rol}
        getUserData={getUserData}
        steps={steps}
      />
      <Form2Operations 
        rol={rol}
        getUserData={getUserData}
        changeSteps={changeSteps} 
        steps={steps}
        />  
      <Form3Talent 
        rol={rol}
        getUserData={getUserData}
        changeSteps={changeSteps}
        steps={steps} 
        />
      <Form4Ambassador 
        rol={rol}
        getUserData={getUserData}
        changeSteps={changeSteps}
        steps={steps}  
        /> 
     <Form5LastCheck 
      rol={rol}
      getUserData={getUserData}
      changeSteps={changeSteps} 
      steps={steps} 
      />     
     </section>
      <div className="developer-container">
        <Link to="/developerlist"><button className="developer-button">Volver</button></Link>
      </div>
    </div>

  );
}

Form.propTypes = {
  steps: PropTypes.object.isRequired,
  rol: PropTypes.string.isRequired,
  getUserData: PropTypes.func.isRequired,
  changeSteps: PropTypes.func.isRequired,
}

export default Form; 