import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Feed from './Feed.jsx';
import { Switch, Route } from 'react-router-dom';
import Header from './Header.jsx';



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Feed} />
        </Switch>
      </div>
    );
  }
}

export default App;
