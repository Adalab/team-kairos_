import React from 'react';

const Form4Ambassador = props => {
  const { rol, getUserData } = props;
  return (
    <fieldset>
    <label htmlFor="sendChecked">Enviar mail a empleado</label>
    <input type="checkbox" id="sendChecked" name="sendChecked" disabled={!(rol==='ambassador')&&'disabled'} onChange={getUserData}/>
  </fieldset>
  );

}

export default Form4Ambassador;