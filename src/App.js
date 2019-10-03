import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Form from './components/Form';
import './App.scss';
import Login from './components/Login';
import DevelopersList from './components/DevelopersList';
import NewProcess from './components/NewProcess';
import { getDevelopers } from './services/getDevelopers';
import firebase from 'firebase';
import { withRouter } from 'react-router-dom';

var config = {
  apiKey: 'AIzaSyCttKCcGy58xs60l9mHQ__OLRPjnDKvsBw',
  authDomain: 'kandidates-146710',
  databaseURL: 'http://kandidates-146710.firebaseio.com/',
}
firebase.initializeApp(config)


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: { headfirst: false },
      logged: false,
      email: '',
      rol: '',
      developer: '',
      emailDev: '',
      client: '',
      project: '',
      rate: '',
      date: '',
      id: '',
      code: '',
      description: '',
      task: '',
      ambassador: '',
      sendChecked: false,
      dataChecked: false,
      devAsignation: [],
    };
    this.getUserData = this.getUserData.bind(this);
    this.changeSteps = this.changeSteps.bind(this);
    this.createProject = this.createProject.bind(this);
    this.login = this.login.bind(this);
    this.resetStep = this.resetStep.bind(this);
    this.transitionToMain = this.transitionToMain.bind(this);
    this.writeUserData = this.writeUserData.bind(this);
  }

  componentDidMount() {
    this.writeUserData();
  }
  writeUserData() {
    const database = firebase.database()
    database.ref('/devAsignation').once('value').then(snapshot => {
      const newApi = snapshot.val();
      this.setState({
        devAsignation: newApi
      })
    });
  }

  getUserData(event) {
    const value = event.currentTarget.value;
    const id = event.currentTarget.id;
    if (id === 'sendChecked') {

      this.setState((prevState) => {
        const newSendChecked = prevState.sendChecked;
        return {
          sendChecked: !newSendChecked
        }
      })

    } else if (id === 'dataChecked') {
      this.setState((prevState) => {
        const newDataChecked = prevState.dataChecked;
        return {

          dataChecked: !newDataChecked
        }
      })
    } else {
      this.setState({ [id]: value });
    }
  }

  changeSteps(event) {
    event.preventDefault();
    const id = event.currentTarget.id;
    const idUser = event.currentTarget.getAttribute('data-userid');
    this.setState(prevState => {
      const newDevAsignation = [...prevState.devAsignation];
      const { code,description,task,ambassador,sendChecked,dataChecked } = this.state;
      const index = newDevAsignation.findIndex((user) => user.id === idUser);
      newDevAsignation[index].steps[id] = true;
      if (id === 'operations') {
        newDevAsignation[index].code = code;
        newDevAsignation[index].description = description;
        newDevAsignation[index].task = task;
      } else if (id === 'talent') {
        newDevAsignation[index].ambassador = ambassador;
      } else if (id === 'ambassador') {
        newDevAsignation[index].sendChecked = sendChecked;
      } else if (id === 'headend') {
        newDevAsignation[index].dataChecked = dataChecked;
      }
      return {
        devAsignation: newDevAsignation
      }
    })
  }

  createProject(event) {
    event.preventDefault();
    this.setState(prevState => {
      const newDevAsignation = [...prevState.devAsignation];
      const { developer, emailDev, client, project, rate, date } = this.state;
      const newId = project + developer;
      newDevAsignation.push({
        developer: developer,
        emailDev: emailDev,
        client: client,
        project: project,
        rate: rate,
        date: date,
        id: newId,
        code: '',
        description: '',
        task: '',
        ambassador: '',
        sendChecked: false,
        dataChecked: false,
        steps: {
          headfirst: true,
          operations: false,
          talent: false,
          ambassador: false,
          headend: false,
        }

      });
      const newStepState = {...prevState.steps};
      newStepState.headfirst = true;
      return {
        steps : newStepState,
        devAsignation: newDevAsignation
      }
    })
  }
  transitionToMain(event){
    event.preventDefault();
    this.props.history.push("/developerlist");
  }
  resetStep(){
    this.setState({steps: {headfirst : false}})
  }

  login() {
    this.setState({ logged: true })
  }
  render() {
    console.log(getDevelopers);
    const { email, devAsignation, rol, logged, code, description, task, ambassador, sendChecked, dataChecked, steps } = this.state;
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
                  transitionToMain={this.transitionToMain}
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
                changeSteps={this.changeSteps}
                steps ={steps}
                resetStep={this.resetStep}

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

                  createProject={this.createProject}
                  changeSteps={this.changeSteps}
                  codeState={code}
                  descriptionState={description}
                  taskState={task}
                  ambassadorState={ambassador}
                  sendCheckedState={sendChecked}
                  dataCheckedState={dataChecked}
                />
              );
            }} />

        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
