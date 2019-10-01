import React from 'react';
import PropTypes from 'prop-types';

const Form5LastCheck = props => {
  const { rol, getUserData } = props;
  return (
    <fieldset>
      <label htmlFor="dataChecked">Recepción datos</label>
      <input type="checkbox" id="dataChecked" name="dataChecked" disabled={!(rol === 'head') && 'disabled'} onChange={getUserData}/>
  </fieldset>
  );

}

Form5LastCheck.propTypes = {
  rol: PropTypes.string.isRequired,
  getUserData: PropTypes.func.isRequired
}

export default Form5LastCheck;