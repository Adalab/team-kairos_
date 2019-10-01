import React from 'react';

const Form5LastCheck = props => {
  const { rol, getUserData } = props;
  return (
    <fieldset>
      <label htmlFor="dataChecked">Recepción datos</label>
      <input type="checkbox" id="dataChecked" name="dataChecked" disabled={!(rol === 'head') && 'disabled'} onChange={getUserData}/>
  </fieldset>
  );

}

export default Form5LastCheck;