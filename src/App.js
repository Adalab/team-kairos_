import React from 'react';
import Header from './components/Header';
//import Form from './components/Form';
import './App.scss';
import Login from './components/Login';
import DevelopersList from './components/DevelopersList';
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
        <DevelopersList devAsignation={devAsignation}/>
       
         {/* <Form /> */}
      </div>
    );
  }
}

export default App;
