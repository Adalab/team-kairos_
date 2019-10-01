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
            <Link to={`/form/${dev.code}`}>
              <div className="developer__card-container">
                <h3 className="developer__name">{dev.developer}</h3>
                <p className="developer__project"> proyecto: {dev.project}</p>
                <p className="developer__client">cliente: {dev.client}</p>
                <p className="developer__date">fecha: {dev.date}</p>
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