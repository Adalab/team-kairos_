import React from 'react';

const Form4Ambassador = props => {
  const {rol} = props;
  return (
    <fieldset>
    <label htmlFor="sendChecked">Enviar mail a empleado</label>
    <input type="checkbox" id="sendChecked" name="sendChecked" disabled={!(rol==='ambassador')&&'disabled'} />
  </fieldset>
  );

}

export default Form4Ambassador;