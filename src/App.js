import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import './App.scss';
import Login from './components/Login';
import  {users,devAsignation} from './components/Data';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      users: users,
      devAsignation: devAsignation,
    };
  }

  render() {
    const {devAsignation}= this.state;
    return (
      <div className="app">
        <Header />
        <Login />
        <main className="main__developers">
          <ul className="developers__list">
          {devAsignation.map( dev => {
            return(
              <li>
                <div className="developer__card-container">
                  <h3 className="developer__name">{dev.developer}</h3>
                  <p className="developer__code">{dev.code}</p>
                  <p className="developer__status">fase: {dev.status}</p>
                </div>
              </li>
            );
          })}
          </ul>
        </main>
         {/* <Form /> */}
      </div>
    );
  }
}

export default App;
