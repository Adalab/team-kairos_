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
      id:'',
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
    this.createProject = this.createProject.bind(this);
    this.login = this.login.bind(this);
  }

  getUserData(event) {

    const value = event.currentTarget.value;
    console.log(value);
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

  createProject(event) {
    const id = event.currentTarget.id;
    this.setState(prevState => {
      const newSteps = { ...prevState.steps };

      const newDevAsignation = [...prevState.devAsignation];
      const { developer, emailDev, client, project, rate, date, id } = this.state;
      newDevAsignation.push({
        developer: developer,
        emailDev: emailDev,
        client: client,
        project: project,
        rate: rate,
        date: date,
        id: developer,       
        code: '',
        description: '',
        task: '',
        ambassador: '',
        sendChecked: '',
        dataChecked: '',

      });

      newSteps[id] = true;
      return {
        steps: newSteps,
        devAsignation: newDevAsignation
      }
    })
  }

  login(event) {
    this.setState({ logged: true })
  }

  render() {
    const { email, devAsignation, rol, logged, steps } = this.state;
    return (
      <div className="app">
        <Header
          email={email}
          logged={logged} />

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
                rol={rol}
                createProject={this.createProject}
                getUserData={this.getUserData}
              />
            );
          }} />
          <Route
            path="/form/:asignationId"
            render={routerProps => {
              return (
                <Form
                  devAsignation={devAsignation}
                  routerProps={routerProps}
                  rol={rol}
                  getUserData={this.getUserData}
                  changeSteps={this.changeSteps}
                  steps={steps} />
              );
            }} />

        </Switch>
      </div>
    );
  }
}

export default App;
