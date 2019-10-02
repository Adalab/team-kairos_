import React from 'react';
import PropTypes from 'prop-types';

const Form5LastCheck = props => {
  const { rol, getUserData, changeSteps, steps, dataChecked, id } = props;
  return (
    <form onSubmit={changeSteps} id="headend" data-userid={id}>
      <label htmlFor="dataChecked">Recepción datos</label>
      <input type="checkbox" id="dataChecked" name="dataChecked" 
      checked={dataChecked}
      disabled={(steps.headend ||!(rol === 'head')) && 'disabled'}
      onChange={getUserData} value={dataChecked} required/>
      {(rol === 'head')&& !steps.headend && <input  type="submit" 
      disabled= { !steps.talent  || !steps.ambassador || !steps.operations|| !(steps.ambassador)}
      value="Confirmar"/>}
  </form>
  );
}

Form5LastCheck.propTypes = {
  steps: PropTypes.object.isRequired,
  rol: PropTypes.string.isRequired,
  getUserData: PropTypes.func.isRequired,
  changeSteps: PropTypes.func.isRequired,
}

export default Form5LastCheck;