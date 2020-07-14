import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar'
import HomePage from '../HomePage/HomePage'


class App extends Component {
  /*--- State ---*/
  state = {
    user: userService.getUser()
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
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Covid Resources
          <nav>
            <>
              <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
            </>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path='/' render={() =>
            <HomePage />
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
          </Switch>
        </main>
        <footer className='header-footer'>
          M A D E &nbsp;&nbsp;|&nbsp;&nbsp; B Y &nbsp;&nbsp;|&nbsp;&nbsp; A A R O N &nbsp;&nbsp;|&nbsp;&nbsp;S M I T H &nbsp;&nbsp;|&nbsp;&nbsp; github
        </footer>
      </div>
    );
  }
}

export default App;
