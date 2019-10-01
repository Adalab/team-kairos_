import React from 'react';

const Form2Operations = props => {
  const { rol, getUserData } = props;
  return (
    <fieldset>
      <label htmlFor="code">Código proyecto</label>
      <input type="text" id="code" name="code" disabled={!(rol==='operations')&&'disabled'} onChange={getUserData}/>

      <label htmlFor ="description">Descripción</label>
      <input type="textarea" id="description" name = "description" disabled={!(rol==='operations')&&'disabled'} onChange={getUserData}/>

      <label htmlFor="task">Nº tarea de proyecto</label>
      <input type="text" id="task" name="task" disabled={!(rol==='operations')&&'disabled'} onChange={getUserData}/>

      
  </fieldset>
  );

}


export default Form2Operations;