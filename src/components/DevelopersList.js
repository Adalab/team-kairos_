import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/DevelopersList.scss';

const DevelopersList = (props) => {
  const { devAsignation, rol } = props;
  return (
    <main className="main__developers">
        {(rol === 'head') && <Link to="/newprocess"> <button className="create__developer-button">Iniciar proceso</button></Link>}
      <ul className="developers__list">
        {devAsignation.map((dev, index) =>
          <li className="developers__item" key={index}>           
            <Link className="developer__link" to={`/form/${dev.id}`}>
              <div className="developer__card-container">
                <h3 className="developer__name">{dev.developer}</h3>
                <p className="developer__project"> proyecto: {dev.project}</p>
                <p className="developer__client">cliente: {dev.client}</p>
                <p className="developer__date">fecha: {dev.date}</p>
                <p>Pendiente de aprobación:</p> 
                <div className="info-container">                 
                  {!dev.steps.operations && <div className="info">o</div>}
                  {!dev.steps.talent && <div className="info">{!dev.steps.talent ? 't' : ''}</div>}
                  {!dev.steps.ambassador && <div className="info">e</div>}
                  {!dev.steps.headend && <div className="info">h</div>}
                  {dev.steps.headend && <p className = "info-end">asignación cerrada</p>}
                </div>
              </div>
            </Link>
          </li>
        )}
      </ul>

    </main>
  );
}
DevelopersList.propTypes = {
  rol: PropTypes.string.isRequired,
  devAsignation: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default DevelopersList;