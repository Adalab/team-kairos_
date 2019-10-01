import React from 'react';
import PropTypes from 'prop-types';

const Form2Operations = props => {
  const { rol, getUserData, changeSteps } = props;
  return (
    <fieldset>
      <label htmlFor="code">Código proyecto</label>
      <input type="text" id="code" name="code" disabled={!(rol==='operations')&&'disabled'} onChange={getUserData}/>

      <label htmlFor ="description">Descripción</label>
      <input type="textarea" id="description" name = "description" disabled={!(rol==='operations')&&'disabled'} onChange={getUserData}/>

      <label htmlFor="task">Nº tarea de proyecto</label>
      <input type="text" id="task" name="task" disabled={!(rol==='operations')&&'disabled'} onChange={getUserData}/>   
      <button onClick={changeSteps} id="operations" type="button">Confirmar</button>
  </fieldset>
  );

}
Form2Operations.propTypes = {
  changeSteps:PropTypes.func.isRequired,
}

export default Form2Operations;