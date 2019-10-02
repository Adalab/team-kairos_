import React from 'react';
import PropTypes from 'prop-types';

const Form5LastCheck = props => {
  const { rol, getUserData, changeSteps, steps, dataChecked, id } = props;
  return (
    <form onSubmit={changeSteps} id="headend" data-userId={id}>
      <label htmlFor="dataChecked">Recepción datos</label>
      <input type="checkbox" id="dataChecked" name="dataChecked" disabled={!(rol === 'head') && 'disabled'} onChange={getUserData} value={dataChecked} required/>
      {(rol === 'head') && <input  type="submit" disabled= {(steps.headend)} value="Confirmar"/>}
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