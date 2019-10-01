import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Form from './components/Form';
import './App.scss';
import Login from './components/Login';
import DevelopersList from './components/DevelopersList';
import NewProcess from './components/NewProcess';
//import Form from './components/Form';
import { devAsignation } from './components/Data';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      email: '',
      rol: '',
      developer: '',
      emailDev: '',
      client: '',
      project: '',
      rate: '',
      date: '',
      code: '',
      description: '',
      task: '',
      ambassador: '',
      sendChecked: '',
      dataChecked: '',
      devAsignation: devAsignation,
      steps: {
        headfirst: false,
        operations: false,
        talent: false,
        ambassador: false,
        headend: false,
      }
    };
    this.getUserData = this.getUserData.bind(this);
    this.changeSteps = this.changeSteps.bind(this);
    this.login = this.login.bind(this);
  }

  getUserData(event) {
    const value = event.currentTarget.value;
    const id = event.currentTarget.id;
    this.setState({ [id]: value });
  }

  changeSteps(event) {
    const id = event.currentTarget.id;
    this.setState(prevState => {
      const newSteps = { ...prevState.steps };
      newSteps[id] = true;
      return {
        steps: newSteps
      }
    })
  }

  login(event){
    this.setState({logged:true})
  }

  render() {
    const { email, devAsignation, rol, logged, steps } = this.state;
    return (
      <div className="app">
        <Header 
        email={email}
        logged= {logged}/>

        <Switch>
          <Route exact
            path="/"
            render={() => {
              return (
                <Login
                  login={this.login}
                  email={email}
                  getUserData={this.getUserData}
                />
              );
            }} />
          <Route
            path="/developerlist"
            render={() => {
              return (
                <DevelopersList
                  rol={rol}
                  devAsignation={devAsignation}

                />
              );
            }} />
          <Route path="/newprocess" render={() => {
            return (
              <NewProcess
                changeSteps={this.changeSteps} />
            );
          }} />
          <Route
            path="/form/:id"
            render={() => {
              return (
                <Form
                  rol={rol}
                  getUserData={this.getUserData}
                  changeSteps={this.changeSteps}
                  steps = {steps} />
              );
            }} />
        </Switch>
      </div>
    );
  }
}

export default App;
