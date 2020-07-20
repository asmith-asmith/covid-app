import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import userService from '../../utils/userService';
import * as newsService from '../../utils/newsService'
import NavBar from '../../components/NavBar/NavBar'
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage'
import ForumPage from '../ForumPage/ForumPage'

import {  getTodayWorld,  getCurrentState, getUnitedStatesHistorical } from '../../services/covid-api';
import Aside from '../../components/Aside/Aside';



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
    const newsUS = await newsService.getAll();
    console.log(newsUS)
    this.setState({covidWorldData, covidUSData, USHistoric, newsUS: newsUS.articles})
  }

  /*--- Render Method ---*/
  render() {
    return (
      <div className="App">
        <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
        <main className='site'>
          <Switch>
            <Route exact path='/' render={() =>
              <>
                <Aside/>
                <HomePage
                  covidWorldData={this.state.covidWorldData}
                  covidUSData={this.state.covidUSData}
                  USHistoric={this.state.USHistoric}
                  newsUS={this.state.newsUS}
                />
              </>
            }/>
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
            <Route exact path='/forums' render={({ history }) => 
              <>
                <Aside/>
                <ForumPage

                />
              </>
            }/>
          </Switch>
          {/* <Route exact path='/builtby' render={({ history }) => 
              <>
                <Aside/>
                <ForumPage
                    
                />
              </>
            }/>
          </Switch> */}
        </main>
        {/* // <footer className='footer mt-auto py-3'>
        //   <div className="container">
        //     <span className="text-muted">M A D E &nbsp;&nbsp;|&nbsp;&nbsp; B Y &nbsp;&nbsp;|&nbsp;&nbsp; A A R O N &nbsp;&nbsp;|&nbsp;&nbsp;S M I T H &nbsp;&nbsp;|&nbsp;&nbsp; github</span>
        //   </div>
        // </footer> */}
      </div>
    
    );
  }
}

export default App;
