import React from 'react';
import Header from './components/Header';
import Login from './components/Login';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Login />
      </div>
    );
  }
}

export default App;
