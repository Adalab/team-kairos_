import React from 'react';

const Form1NewProject = props => {
   return (
    <fieldset>
      <label htmlFor="developer">Nombre empleado</label>
      <input type="text" id="developer" name="developer" />
      <label htmlFor="rate">Tarifa</label>
      <input type="text" id="rate" name="rate" />
      <label htmlFor="client">Cliente</label>
      <input type="text" id="client" name="client" />
      <label htmlFor="location">Sede</label>
      <input type="text" id="location" name="location" />
      <label htmlFor="job">Posición</label>
      <input type="text" id="job" name="job" />
      <label htmlFor="projectNumber">Nº de proyecto</label>
      <input type="text" id="projectNumber" name="projectNumber" />
    </fieldset>
   );

}


export default Form1NewProject;


