import React, { Component } from 'react';
import '../App.css';
import Feed from './Feed.jsx';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from './Header.jsx';
import Error404 from './Error404.jsx';
import NewPostForm from './NewPostForm.jsx';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';



class App extends Component {

  componentDidMount() {
    this.updateElapsedSubmittedTime();
    this.timeSubmittedUpdateTimer = setInterval(() => 
      this.updateElapsedSubmittedTime(),
      30000
    );
  }

  updateElapsedSubmittedTime() {
    const { dispatch } = this.props;
    let action = {
      type: 'FORMAT_TIME'
    }
    dispatch(action);
  }

  sortPosts(state) {
    let voteList = [];
    for (var postId in state) {
      voteList.push([postId, state[postId].votes]);
    }
    let sortedList = voteList.sort(function(a, b) {
      return b[1] - a[1];
    });

    return sortedList;
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
  function sortPosts(state) {
    let voteList = [];
    for (var postId in state) {
      voteList.push([postId, state[postId].votes]);
    }
    let sortedList = voteList.sort(function(a, b) {
      return b[1] - a[1];
    });

    let sortedState = {};
    sortedList.forEach(function(idAndVotes) {
      sortedState[idAndVotes[0]] = state[idAndVotes[0]];
    })
    console.log(sortedState);
    return sortedState;
  }

  let sortedState = sortPosts(state);
  return {
    masterPostList: sortedState
  }
}

export default withRouter(connect(mapStateToProps)(App));
