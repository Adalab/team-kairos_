import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import './App.scss';
import Login from './components/Login';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Form />
        <Login />
      </div>
    );
  }
}

export default App;
