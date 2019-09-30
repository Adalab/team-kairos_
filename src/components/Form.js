import React from 'react'; 

const Form = props => {

  return (
    <div className="form__container">
     <form action="/signup" method="post">
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

      <fieldset>
        <label htmlFor="code">Código proyecto</label>
        <input type="text" id="code" name="code" />
        <label htmlFor="ambassador">Embajador</label>
        <input type="text" id="ambassador" name="ambassador" />
      </fieldset>

      <fieldset>
        <label htmlFor="sendChecked">Enviar mail a empleado</label>
        <input type="checkbox" id="sendChecked" name="sendChecked" />
      </fieldset>

      <fieldset>
        <label htmlFor="PRLChecked">PRL </label>
        <input type="checkbox" id="PRLChecked" name="PRLChecked" />
        <label htmlFor="clientSendChecked">Alta Plataforma Cliente</label>
        <input type="checkbox" id="clientSendChecked" name="clientSendChecked" />
      </fieldset>

      <fieldset>
        <label htmlFor="dataChecked">Recepción datos</label>
        <input type="checkbox" id="dataChecked" name="dataChecked" />
      </fieldset>
     </form>
    </div>







  );
}







export default Form; 