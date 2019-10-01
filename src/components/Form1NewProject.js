import React from 'react';

const Form1NewProject = props => {
  const { developer, emailDev, client, project, rate, date, rol, getUserData } = props;
  return (
    <fieldset>
      <label htmlFor="developer">Nombre y apellidos developer</label>
      <input type="text" id="developer" name="developer" disabled={!(rol === 'head') && 'disabled'}
        onChange={getUserData}
        value={developer}
      />
      <label htmlFor="emailDev">Email developer</label>
      <input type="text" id="emailDev" name="emailDev" disabled={!(rol === 'head') && 'disabled'}
        onChange={getUserData}
        value={emailDev} />
      <label htmlFor="client">Cliente</label>
      <input type="text" id="client" name="client" disabled={!(rol === 'head') && 'disabled'}
        onChange={getUserData}
        value={client} />
      <label htmlFor="project">proyecto</label>
      <input type="text" id="project" name="project" disabled={!(rol === 'head') && 'disabled'} 
      onChange={getUserData}
      value={project} />
      <label htmlFor="rate">Tarifa</label>
      <input type="text" id="rate" name="rate" className={!((rol === 'head') || (rol === 'operations')) ? 'hidden' : ''} disabled={!(rol === 'head') && 'disabled'} 
      onChange={getUserData}
      value={rate} />
      <label htmlFor="date">Fecha de incorporación</label>
      <input type="text" id="date" name="date" disabled={!(rol === 'head') && 'disabled'} 
      onChange={getUserData} 
      value={date}/>
    </fieldset>
  );

}


export default Form1NewProject;


