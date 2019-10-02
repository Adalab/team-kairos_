import React from 'react';
import PropTypes from 'prop-types';

const Form1NewProject = props => {
  const { developer, emailDev, client, project, rate, date, rol, getUserData, createProject,steps } = props;
  return (
    <form onSubmit={createProject} id="headfirst">
      <label htmlFor="developer">Nombre y apellidos developer</label>
      <input type="text" id="developer" name="developer" disabled={!(rol === 'head') && 'disabled'} onChange={getUserData} value={developer} required/>
      <label htmlFor="emailDev">Email developer</label>
      <input type="text" id="emailDev" name="emailDev" disabled={!(rol === 'head') && 'disabled'} onChange={getUserData} value={emailDev} required/>
      <label htmlFor="client">Cliente</label>
      <input type="text" id="client" name="client" disabled={!(rol === 'head') && 'disabled'} onChange={getUserData} value={client} required/>
      <label htmlFor="project">proyecto</label>
      <input type="text" id="project" name="project" disabled={!(rol === 'head') && 'disabled'} onChange={getUserData}  value={project} required/>
      <label htmlFor="rate">Tarifa</label>
      <input type="text" id="rate" name="rate" className={!((rol === 'head') || (rol === 'operations')) ? 'hidden': ''} disabled={!(rol === 'head') && 'disabled'} onChange={getUserData} value={rate} required/>
      <label htmlFor="date">Fecha de incorporación</label>
      <input type="text" id="date" name="date" disabled={!(rol === 'head') && 'disabled'} onChange={getUserData} value={date} required/>
      <input className="create__button" type="submit" value="Confirmar" 
      // disabled={(steps.headfirst)}
      />
    </form>
  );

}
Form1NewProject.propTypes = {
  steps: PropTypes.object,
  rol: PropTypes.string.isRequired,
  getUserData: PropTypes.func.isRequired,
  createProject : PropTypes.func,
}

export default Form1NewProject;


