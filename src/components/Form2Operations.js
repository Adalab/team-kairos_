import React from 'react';
import PropTypes from 'prop-types';


const Form2Operations = props => {
  const { rol, getUserData, changeSteps, steps, code, description, task, id, codeState, descriptionState, taskState } = props;
  return (
    <form id="operations" onSubmit={changeSteps} data-userid={id}>
      <label htmlFor="code">Código proyecto</label>
      <input type="text" id="code" name="code"
        disabled={(steps.operations || !(rol === 'operations')) && 'disabled'}
        onChange={getUserData}
        value={(code.lenght > 0) ? code : codeState} required />

      <label htmlFor="description">Descripción</label>
      <input type="textarea" id="description" name="description"
        disabled={(steps.operations || !(rol === 'operations')) && 'disabled'}
        onChange={getUserData}
        value={descriptionState || description} required />

      <label htmlFor="task">Nº tarea de proyecto</label>
      <input type="text" id="task" name="task"
        disabled={(steps.operations || !(rol === 'operations')) && 'disabled'}
        onChange={getUserData}
        value={taskState || task} required />
      {(rol === 'operations') && <input type="submit" value="Confirmar"
        disabled={(steps.operations)} />}
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