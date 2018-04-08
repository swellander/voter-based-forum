import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Feed from './Feed.jsx';
import { Switch, Route } from 'react-router-dom';
import Header from './Header.jsx';
import Error404 from './Error404.jsx';
import NewPostForm from './NewPostForm.jsx';



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Feed} />
          <Route path='/newPost' component={NewPostForm} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
