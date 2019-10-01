import React from 'react';

const Form2Operations = props => {
  const {rol} = props;
  return (
    <fieldset>
      <label htmlFor="code">Código proyecto</label>
      <input type="text" id="code" name="code" disabled={!(rol==='operations')&&'disabled'}/>
      <label htmlFor="ambassador">Embajador</label>
      <input type="text" id="ambassador" name="ambassador" disabled={!(rol==='operations')&&'disabled'} />
  </fieldset>
  );

}


export default Form2Operations;