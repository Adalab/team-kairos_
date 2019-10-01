import React from 'react';

const Form2Operations = props => {
  return (
    <fieldset>
      <label htmlFor="code">Código proyecto</label>
      <input type="text" id="code" name="code" />
      <label htmlFor="ambassador">Embajador</label>
      <input type="text" id="ambassador" name="ambassador" />
  </fieldset>
  );

}


export default Form2Operations;