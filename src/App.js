import React from 'react';
import Header from './components/Header';
//import Form from './components/Form';
import './App.scss';
import Login from './components/Login';
import DevelopersList from './components/DevelopersList';
import { devAsignation } from './components/Data';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { email: '', rol: '' },
      devAsignation: devAsignation,
    };
    this.getUserData = this.getUserData.bind(this);
  }
  getUserData(event) {
    const value = event.currentTarget.value;
    const id = event.currentTarget.id;
    this.setState({ [id]: value });
    console.log(value);
  }

  render() {
    const { users, devAsignation } = this.state;
    return (
      <div className="app">
        <Header />
        <Login
          users={users}
          getUserData={this.getUserData} />
        <DevelopersList devAsignation={devAsignation} />

        {/* <Form /> */}
      </div>
    );
  }
}

export default App;
