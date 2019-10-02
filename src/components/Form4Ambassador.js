import React from 'react';
import PropTypes from 'prop-types';

const Form4Ambassador = props => {
  const { rol, getUserData, changeSteps, steps, sendChecked,id } = props;
  
  return (
    <form onSubmit={changeSteps} id="ambassador" data-userid={id}>
    <label htmlFor="sendChecked">Enviar mail a empleado</label>
    <input type="checkbox" id="sendChecked" name="sendChecked" 
    checked={sendChecked}
    disabled={(steps.ambassador ||!(rol === 'ambassador'))}
    onChange={getUserData} 
    value={sendChecked} required/>
    {(rol === 'ambassador') && <input  type="submit"   disabled= { !steps.talent  ||(steps.ambassador)} value="Confirmar"/>}
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