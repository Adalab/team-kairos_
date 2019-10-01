import React from 'react';
import PropTypes from 'prop-types';

const Form2Operations = props => {
  const { rol, getUserData, changeSteps, steps } = props;
  return (
    <fieldset>
      <label htmlFor="code">Código proyecto</label>
      <input type="text" id="code" name="code" disabled={!(rol==='operations')&&'disabled'} onChange={getUserData}/>

      <label htmlFor ="description">Descripción</label>
      <input type="textarea" id="description" name = "description" disabled={!(rol==='operations')&&'disabled'} onChange={getUserData}/>

      <label htmlFor="task">Nº tarea de proyecto</label>
      <input type="text" id="task" name="task" disabled={!(rol==='operations')&&'disabled'} onChange={getUserData}/> 
      {(rol === 'operations') && <button onClick={changeSteps} id="operations" type="button" disabled= {(steps.operations)}>Confirmar</button>} 
      
  </fieldset>
  );

}
Form2Operations.propTypes = {
  steps: PropTypes.object.isRequired,
  rol: PropTypes.string.isRequired,
  getUserData: PropTypes.func.isRequired,
  changeSteps:PropTypes.func.isRequired,
}

export default Form2Operations;