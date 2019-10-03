import React from 'react';
import PropTypes from 'prop-types';


const Form2Operations = props => {
  const { rol, getUserData, changeSteps, steps, code, description, task, id, codeState, descriptionState, taskState } = props;
  return (
    <form className="form-box" id="operations" onSubmit={changeSteps} data-userid={id}>

      <div className="input-container">
        <label htmlFor="code">Código proyecto</label>
        <input
          type="text"
          id="code"
          name="code"
          disabled={(steps.operations || !(rol === 'operations')) && 'disabled'}
          onChange={getUserData}
          value={ code || codeState} required />
      </div>

      <div className="input-container">
        <label htmlFor="description">Descripción</label>
        <input
          type="textarea"
          id="description"
          name="description"
          disabled={(steps.operations || !(rol === 'operations')) && 'disabled'}
          onChange={getUserData}
          value={description || descriptionState} required />
      </div>

      <div className="input-container">
        <label htmlFor="task">Nº tarea de proyecto</label>
        <input
          type="text" id="task"
          name="task"
          disabled={(steps.operations || !(rol === 'operations')) && 'disabled'}
          onChange={getUserData}
          value={task || taskState} required />
      </div>

      {(rol === 'operations') &&
        <input type="submit" value="Confirmar" disabled={(steps.operations)} />}
    </form>
  );

}
Form2Operations.propTypes = {
  steps: PropTypes.object.isRequired,
  rol: PropTypes.string.isRequired,
  getUserData: PropTypes.func.isRequired,
  changeSteps: PropTypes.func.isRequired,
  codeState: PropTypes.string.isRequired,
  descriptionState: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired,
}

export default Form2Operations;