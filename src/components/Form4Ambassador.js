import React from 'react';
import PropTypes from 'prop-types';

const Form4Ambassador = props => {
  const { rol, getUserData, changeSteps, steps, id,sendCheckedState } = props;
  return (
    <form className="form-box" onSubmit={changeSteps} id="ambassador" data-userid={id}>
      <label htmlFor="sendChecked">Enviar mail a empleado</label>
      <input
        type="checkbox"
        id="sendChecked"
        name="sendChecked"
        checked={steps.ambassador ? true : sendCheckedState}
        disabled={!steps.talent || steps.ambassador || !(rol === 'ambassador')}
        onChange={getUserData}
        value={sendCheckedState} required />
        {(rol === 'ambassador') && <input type="submit"
        disabled={!steps.talent || steps.ambassador}
        value="Confirmar" />}
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