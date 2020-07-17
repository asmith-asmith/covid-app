import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar'
import HomePage from '../HomePage/HomePage'
import {  getTodayWorld,  getCurrentState, getUnitedStatesHistorical } from '../../services/covid-api';
import {  getNews } from '../../services/news-api';



class App extends Component {
  /*--- State ---*/
  state = {
    user: userService.getUser(),
    covidUSData: [],
    covidWorldData: [],
    USHistoric: [],
    newsUS: []
  }
  /*--- Handle Methods ---*/
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }
  /*--- Lifecycle Methods ---*/
  async componentDidMount() {
    const covidWorldData = await getTodayWorld();
    const covidUSData = await getCurrentState();
    const USHistoric = await getUnitedStatesHistorical()
    const newsUS = await getNews()
    this.setState({covidWorldData: covidWorldData, covidUSData: covidUSData, USHistoric: USHistoric, newsUS: newsUS})
  }

  /*--- Render Method ---*/
  render() {
    return (
      <div className="App">
        <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
        <main>
          <Switch>
            <Route exact path='/' render={() =>
            <HomePage
              covidWorldData={this.state.covidWorldData}
              covidUSData={this.state.covidUSData}
              USHistoric={this.state.USHistoric}
              newsUS={this.state.new}
            />
            }/>
            {/* <DataHolder
            covidData={props.covidData}
          /> */}
            <Route exact path='/signup' render={({ history }) => 
              <SignupPage
                history={history}
                handleSignup={this.handleSignupOrLogin}
              />
            }/>
            <Route exact path='/login' render={({ history }) => 
              <LoginPage
                history={history}
                handleLogin={this.handleSignupOrLogin}
              />
            }/>
          </Switch>
        </main>
        <footer className='footer mt-auto py-3'>
          <div className="container">
            <span className="text-muted">M A D E &nbsp;&nbsp;|&nbsp;&nbsp; B Y &nbsp;&nbsp;|&nbsp;&nbsp; A A R O N &nbsp;&nbsp;|&nbsp;&nbsp;S M I T H &nbsp;&nbsp;|&nbsp;&nbsp; github</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
