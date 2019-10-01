import React from 'react';

const Form5LastCheck = props => {
  const { rol } = props;
  return (
    <fieldset>
      <label htmlFor="dataChecked">Recepción datos</label>
      <input type="checkbox" id="dataChecked" name="dataChecked" disabled={!(rol === 'head') && 'disabled'}/>
  </fieldset>
  );

}

export default Form5LastCheck;