import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Form1NewProject from './Form1NewProject';
import Form2Operations from './Form2Operations';
import Form4Ambassador from './Form4Ambassador';
import Form3Talent from './Form3Talent';
import Form5LastCheck from './Form5LastCheck';

const Form = props => {
  const { rol, getUserData, changeSteps, steps, routerProps, devAsignation } = props;
  const asignationId = routerProps.match.params.asignationId;

  const process = devAsignation.filter(item => item.id === asignationId);


  const { developer, emailDev, client, project, rate, date, code, description, task, ambassador, sendChecked, dataChecked } = process[0];
  return (
    <div className="form__container">
      <form action="/signup" method="post">
        <Form1NewProject
          rol={rol}
          getUserData={getUserData}

          developer={developer}
          emailDev={emailDev}
          client={client}
          project={project}
          rate={rate}
          date={date}

        />
        <Form2Operations
          rol={rol}
          getUserData={getUserData}
          changeSteps={changeSteps}
          steps={steps}

          code ={code}
          description={description}
          task={task}
        />
        <Form3Talent
          rol={rol}
          getUserData={getUserData}
          changeSteps={changeSteps}
          steps={steps}

          ambassador={ambassador}
        />
        <Form4Ambassador
          rol={rol}
          getUserData={getUserData}
          changeSteps={changeSteps}
          steps={steps}

          sendChecked={sendChecked}
        />
        <Form5LastCheck
          rol={rol}
          getUserData={getUserData}
          changeSteps={changeSteps}
          steps={steps}

          dataChecked={dataChecked}
        />
      </form>
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