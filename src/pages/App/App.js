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
import AddForumPage from '../AddForumPage/AddForumPage'
import * as forumService from '../../utils/forumService'


import {  getTodayWorld,  getCurrentState, getUnitedStatesHistorical } from '../../services/covid-api';
import Aside from '../../components/Aside/Aside';
import WikiPage from '../WikiPage/WikiPage';



class App extends Component {
  /*--- State ---*/
  state = {
    user: userService.getUser(),
    covidUSData: [],
    covidWorldData: [],
    USHistoric: [],
    newsUS: [],
    forums: [
      {
          _id: 1,
          title: "the end is near",
          content: "blalvlalv ablas the way rhesa  lskjh",
          user: 'Aaron',
          comments: [
              {
                  content: "loser",
                  user: "meeeee"
              }
          ],
      }
  ]
  }
  /*--- Handle Methods ---*/
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleAddForum = newForumData => {
    newForumData._id = this.state.forums.length + 1
    this.setState({
      forums: [...this.state.forums, newForumData]
    }, () => {
      this.props.history.push('/forums')
      console.log(this.props.history)
    })
}

  /*--- Lifecycle Methods ---*/
  getAllForums = async () => {
    const forums = await forumService.getAll();
    this.setState({
      forums
    }, () => this.state.props.history.push('/forums'));
}

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
                  history={history}
                  forums={this.state.forums}
                />
              </>
            }/>
            <Route exact path='/forums/add' render={() =>
                <AddForumPage handleAddForum={this.handleAddForum}/>
            } />
            <Route exact path='/wiki' render={() =>
                <>
                  <Aside/> 
                  <WikiPage />
                </>
            } />
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
