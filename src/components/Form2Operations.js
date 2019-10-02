import React from 'react';
import PropTypes from 'prop-types';

const Form2Operations = props => {
  const { rol, getUserData, changeSteps, steps, code, description, task } = props;
  return (
    <form id="operations"  onSubmit={changeSteps}>
      <label htmlFor="code">Código proyecto</label>
      <input type="text" id="code" name="code" disabled={!(rol==='operations')&&'disabled'} onChange={getUserData} value={code} required/>

      <label htmlFor ="description">Descripción</label>
      <input type="textarea" id="description" name = "description" disabled={!(rol==='operations')&&'disabled'} onChange={getUserData} value={description} required/>

      <label htmlFor="task">Nº tarea de proyecto</label>
      <input type="text" id="task" name="task" disabled={!(rol==='operations')&&'disabled'} onChange={getUserData}  value={task} required/> 
      {(rol === 'operations') && <input type="submit" value="Confirmar" disabled={(steps.operations)}/>}  
  </form>
  );

}
Form2Operations.propTypes = {
  steps: PropTypes.object.isRequired,
  rol: PropTypes.string.isRequired,
  getUserData: PropTypes.func.isRequired,
  changeSteps:PropTypes.func.isRequired,
}

export default Form2Operations;