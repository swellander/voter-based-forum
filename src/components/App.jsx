import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Feed from './Feed.jsx';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from './Header.jsx';
import Error404 from './Error404.jsx';
import NewPostForm from './NewPostForm.jsx';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';



class App extends Component {
  constructor(props) {
    super(props)
  }

  
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={()=><Feed postList={this.props.masterPostList} />} />
          <Route path='/newPost' render={()=><NewPostForm onNewPostFormSubmission={this.handleNewPostFormSubmission} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  masterPostList: PropTypes.object
}

const mapStateToProps = state => { 
  return {
    masterPostList: state
  }
}

export default withRouter(connect(mapStateToProps)(App));
