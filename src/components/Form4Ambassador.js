import React from 'react';
import PropTypes from 'prop-types';
const Form4Ambassador = props => {
  const { rol, getUserData, changeSteps, steps } = props;
  return (
    <fieldset>
    <label htmlFor="sendChecked">Enviar mail a empleado</label>
    <input type="checkbox" id="sendChecked" name="sendChecked" disabled={!(rol==='ambassador')&&'disabled'} onChange={getUserData}/>
    {(rol === 'ambassador') && <button onClick={changeSteps} id="ambassador" type="button"   disabled= {(steps.ambassador)} >Confirmar</button>}

  </fieldset>
  );

}

Form4Ambassador.propTypes = {
  steps: PropTypes.object.isRequired,
  rol: PropTypes.string.isRequired,
  getUserData: PropTypes.func.isRequired,
  changeSteps: PropTypes.func.isRequired,
}

export default Form4Ambassador;