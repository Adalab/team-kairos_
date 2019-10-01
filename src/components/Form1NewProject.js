import React from 'react';

const Form1NewProject = props => {
  const {rol} = props;
   return (
    <fieldset>
      <label htmlFor="developer">Nombre empleado</label>
      <input type="text" id="developer" name="developer" disabled={!(rol==='head')&&'disabled'} />
      <label htmlFor="rate">Tarifa</label>
      <input type="text" id="rate" name="rate" className={!((rol==='head')||(rol==='operations'))&&'hidden'} disabled={!(rol==='head')&&'disabled'}/>
      <label htmlFor="client">Cliente</label>
      <input type="text" id="client" name="client" disabled={!(rol==='head')&&'disabled'}/>
      <label htmlFor="location">Sede</label>
      <input type="text" id="location" name="location" disabled={!(rol==='head')&&'disabled'} />
      <label htmlFor="job">Posición</label>
      <input type="text" id="job" name="job" disabled={!(rol==='head')&&'disabled'} />
      <label htmlFor="projectNumber">Nº de proyecto</label>
      <input type="text" id="projectNumber" name="projectNumber" disabled={!(rol==='head')&&'disabled'} />
    </fieldset>
   );

}


export default Form1NewProject;


