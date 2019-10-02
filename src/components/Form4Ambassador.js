import React from 'react';
import PropTypes from 'prop-types';

const Form4Ambassador = props => {
  const { rol, getUserData, changeSteps, steps, sendChecked } = props;
  return (
    <form onSubmit={changeSteps} id="ambassador">
    <label htmlFor="sendChecked">Enviar mail a empleado</label>
    <input type="checkbox" id="sendChecked" name="sendChecked" disabled={!(rol==='ambassador')&&'disabled'} onChange={getUserData} value={sendChecked} required/>
    {(rol === 'ambassador') && <input  type="submit"   disabled= {(steps.ambassador)} value="Confirmar"/>}

  </form>
  );
}

Form4Ambassador.propTypes = {
  steps: PropTypes.object.isRequired,
  rol: PropTypes.string.isRequired,
  getUserData: PropTypes.func.isRequired,
  changeSteps: PropTypes.func.isRequired,
}

export default Form4Ambassador;