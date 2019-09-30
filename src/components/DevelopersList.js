import React from 'react';
import PropTypes from 'prop-types';
import '../styles/DevelopersList.scss';

const DevelopersList = (props) => {
  const { devAsignation } = props;
  return (
    <main className="main__developers">
      <button className="create__developer-button">Iniciar proceso</button>
      <ul className="developers__list">
        {devAsignation.map((dev,index) =>
          <li className="developers__item" key={index}>
            <div className="developer__card-container">
              <h3 className="developer__name">{dev.developer}</h3>
              <p className="developer__code">{dev.code}</p>
              <p className="developer__status">fase: {dev.status}</p>
            </div>
          </li>
        )}
      </ul>
    </main>
  );
}
DevelopersList.propTypes = {
  devAsignation: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default DevelopersList;