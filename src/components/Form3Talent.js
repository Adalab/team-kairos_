import React from 'react';
import PropTypes from 'prop-types';

const Form3Talent = props => {
  const { rol, getUserData, changeSteps, steps} = props;
  return (
    <form onSubmit={changeSteps} id="talent">
      <label htmlFor="ambassador">Embajador</label>
      <input type="text" id="ambassador" name="ambassador" disabled={!(rol==='talent')&&'disabled'} onChange={getUserData} required/>
      {(rol === 'talent') && <input type="submit" disabled= {(steps.talent)}  value="Confirmar"/>}
  </form>
  );

}

Form3Talent.propTypes = {
  steps: PropTypes.object.isRequired,
  rol: PropTypes.string.isRequired,
  getUserData: PropTypes.func.isRequired,
  changeSteps: PropTypes.func.isRequired,
}

export default Form3Talent;