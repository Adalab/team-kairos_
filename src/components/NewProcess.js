import React from 'react';
import Form1NewProject from './Form1NewProject';

const NewProcess = props => {
  return (
    <main>
      <form action="">
        <Form1NewProject />
        <div className="button__container">
          <button className="create__button" type="submit">Iniciar Proceso</button>
        </div>
      </form>
    </main>

  );
}
export default NewProcess;