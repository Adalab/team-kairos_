import React from 'react';
import PropTypes from 'prop-types';

const Form1NewProject = props => {
  const { developer, emailDev, client, project, rate, date, rol, getUserData, createProject, steps } = props;
  return (
    <form className="form-box" onSubmit={createProject} id="headfirst">

      <div className="input-container">
        <label htmlFor="developer">Nombre completo</label>
        <input type="text"
          id="developer"
          name="developer"
          disabled={!(rol === 'head') && 'disabled'}
          onChange={getUserData}
          value={developer}
          required
          className="inputs-form" />
      </div>

      <div className="input-container">
        <label htmlFor="emailDev">Email developer</label>
        <input
          type="text"
          id="emailDev"
          name="emailDev"
          disabled={!(rol === 'head') && 'disabled'}
          onChange={getUserData}
          value={emailDev}
          required
          className="inputs-form" />
      </div>

      <div className="input-container">
        <label htmlFor="client">Cliente</label>
        <input
          type="text"
          id="client"
          name="client"
          disabled={!(rol === 'head') && 'disabled'}
          onChange={getUserData}
          value={client}
          required
          className="inputs-form" />
      </div>

      <div className="input-container">
        <label htmlFor="project">proyecto</label>
        <input
          type="text"
          id="project"
          name="project"
          disabled={!(rol === 'head') && 'disabled'}
          onChange={getUserData}
          value={project}
          required
          className="inputs-form" />
      </div>

      <div className="input-container">
        <label className={!((rol === 'head') || (rol === 'operations')) ? 'hidden' : ''} htmlFor="rate">Tarifa</label>
        <input
          type="text"
          id="rate"
          name="rate"
          className={!((rol === 'head') || (rol === 'operations')) ? 'hidden' : 'inputs-form'}
          disabled={!(rol === 'head') && 'disabled'}
          onChange={getUserData}
          value={rate}
          required
        />
      </div>

      <div className="input-container">
        <label htmlFor="date">Incorporación</label>
        <input
          placeholder="dd/mm/yyyy"
          type="text"
          id="date"
          name="date"
          disabled={!(rol === 'head') && 'disabled'}
          onChange={getUserData}
          value={date}
          required
          className="inputs-form" />
      </div>

      {rol === 'head' && <input className="create__button btn" type="submit" value="Confirmar"
        disabled={(steps.headfirst)} />}
    </form>
  );
}

Form1NewProject.propTypes = {
  steps: PropTypes.object,
  rol: PropTypes.string.isRequired,
  getUserData: PropTypes.func.isRequired,
  createProject: PropTypes.func,
}

export default Form1NewProject;


