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
      email: '', 
      rol: '' ,
      devAsignation: devAsignation,
      steps : {
        headfirst: false,
        operations: false,
        talent: false,
        ambassador: false,
        headend: false,
      }
    };
    this.getUserData = this.getUserData.bind(this);
    this.changeSteps = this.changeSteps.bind(this);
  }
  getUserData(event) {
    const value = event.currentTarget.value;
    const id = event.currentTarget.id;
    this.setState({[id]: value });
  }
  changeSteps (event) {
    this.setState (prevState => {
      const newSteps = {...prevState.steps};
      newSteps.headfirst = true;  
      return {
        steps: newSteps
      }
    }) 
  }
  render() {
    const { email, devAsignation } = this.state;
    return (
      <div className="app">
        <Header email={email}/>

        <Switch>
          <Route exact 
            path="/" 
            render={() => {
              return (
                <Login
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
                  devAsignation = {devAsignation} 
                 
                />
              );
            }} />
          <Route path="/newprocess" render={() => {
            return (
              <NewProcess 
              changeSteps = {this.changeSteps}/>
            );
          }} />         
          <Route path="/form/:id" component={Form} />

        </Switch>
      </div>
    );
  }
}

export default App;
