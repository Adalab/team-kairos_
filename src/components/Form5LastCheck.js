import React from 'react';
import PropTypes from 'prop-types';

const Form5LastCheck = props => {
  const { rol, getUserData, changeSteps, steps, dataCheckedState, id } = props;
  return (
    <form className="form-box" onSubmit={changeSteps} id="headend" data-userid={id}>
      <div className="input-container">
        <label htmlFor="dataChecked">Recepción datos</label>
        <input
          type="checkbox"
          id="dataChecked"
          name="dataChecked"
          checked={steps.headend ? true : dataCheckedState}
          disabled={!steps.talent || !steps.ambassador || !steps.operations || steps.headend || !(rol === 'head')}
          onChange={getUserData}
          value={dataCheckedState}
          required
        />
      </div>


      {(rol === 'head') && !steps.headend && <input type="submit"
        disabled={!steps.talent || !steps.ambassador || !steps.operations || steps.headend}
        value="Confirmar" className="btn" />}
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