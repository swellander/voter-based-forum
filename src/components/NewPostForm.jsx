import React from 'react';
import Feed from './Feed.jsx';
import TextField from 'material-ui/TextField';
import { withRouter } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import v4 from 'uuid';
import { Route } from 'react-router-dom';


function NewPostForm(props, context) {
    console.log(context.history);
    function handleNewPostFormSubmission(event) {
        event.preventDefault();
        const { dispatch } = props;
        const action = {
            type: 'ADD_POST',
            title: inputs.title,
            userName: inputs.userName,
            body: inputs.body,
            id: v4()
        }
        dispatch(action);
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

export default connect()(NewPostForm);