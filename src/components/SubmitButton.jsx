import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router-dom'
// this also works with react-router-native

const SubmitButton = withRouter(({ history }) => (
  <RaisedButton
    type='submit'
    label="Create Post" 
    primary={true}
    onClick={() => { history.push('/') }}
  />
))

export default SubmitButton;