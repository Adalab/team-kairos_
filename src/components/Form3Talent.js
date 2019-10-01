import React from 'react';
import PropTypes from 'prop-types';

const Form3Talent = props => {
  const { rol, getUserData } = props;
  return (
    <fieldset>
      <label htmlFor="ambassador">Embajador</label>
      <input type="text" id="ambassador" name="ambassador" disabled={!(rol==='talent')&&'disabled'} onChange={getUserData}/>
  </fieldset>
  );

}

Form3Talent.propTypes = {
  rol: PropTypes.string.isRequired,
  getUserData: PropTypes.func.isRequired
}

export default Form3Talent;