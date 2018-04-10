import React from 'react';
import TextField from 'material-ui/TextField';
import { withRouter } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import v4 from 'uuid';
import { Route } from 'react-router-dom';
import Moment from 'moment';


function NewPostForm(props, context) {
    function handleNewPostFormSubmission(event) {
        event.preventDefault();
        const { dispatch } = props;
        const action = {
            type: 'ADD_POST',
            title: inputs.title,
            userName: inputs.userName,
            body: inputs.body,
            votes: 0,
            timeSubmitted: new Moment(),
            id: v4()
        }
        dispatch(action);
        console.log(action.timeSubmitted);
    }

    //Take the value of material-ui text inputs and maps it to inputs object. This is most likely not best practice. Definitely check in with others to figure out better way. 
    function handleChange(event) {
        let input = event.target.value;
        inputs[event.target.name] = input;
    }
    let inputs = {};

    let styles = {
        margin: 'auto',
        maxWidth: '700px'
    }
    return (
        <div style={styles}>
            <form onSubmit={handleNewPostFormSubmission}>
                <TextField
                    floatingLabelText="Title"
                    onChange={handleChange}
                    name="title"
                />
                <br/>
                <TextField
                    floatingLabelText="Username"
                    name="userName"
                    onChange={handleChange}
                />
                <br/>
                <TextField
                    floatingLabelText="Body"
                    fullWidth={true}
                    multiLine={true}
                    name="body"
                    onChange={handleChange}
                />
                <br/>
                <br/>
                <Route render={({ history }) => (
                    <RaisedButton
                        type='submit'
                        label="Create Post" 
                        primary={true}
                    />
                )}/>

            </form>
        </div>
    )
}

export default withRouter(connect()(NewPostForm));