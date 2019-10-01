import React from 'react';
import PropTypes from 'prop-types';

const Form5LastCheck = props => {
  const { rol, getUserData, changeSteps, steps } = props;
  return (
    <fieldset>
      <label htmlFor="dataChecked">Recepción datos</label>
      <input type="checkbox" id="dataChecked" name="dataChecked" disabled={!(rol === 'head') && 'disabled'} onChange={getUserData}/>
      {(rol === 'head') && <button onClick={changeSteps} id="headend" type="button" disabled= {(steps.headend)} >Confirmar</button>}

  </fieldset>
  );
}

Form5LastCheck.propTypes = {
  steps: PropTypes.object.isRequired,
  rol: PropTypes.string.isRequired,
  getUserData: PropTypes.func.isRequired,
  changeSteps: PropTypes.func.isRequired,
}

export default Form5LastCheck;