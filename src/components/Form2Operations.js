import React from 'react';

const Form2Operations = props => {
  const {rol} = props;
  return (
    <fieldset>
      <label htmlFor="code">Código proyecto</label>
      <input type="text" id="code" name="code" disabled={!(rol==='operations')&&'disabled'}/>

      <label htmlFor ="description">Descripción</label>
      <input type="textarea" id="description" name = "description" disabled={!(rol==='operations')&&'disabled'}/>

      <label htmlFor="task">Nº tarea de proyecto</label>
      <input type="text" id="task" name="task" disabled={!(rol==='operations')&&'disabled'}/>

      
  </fieldset>
  );

}


export default Form2Operations;