import React from 'react';
import Feed from './Feed.jsx';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

function NewPostForm() {
    let styles = {
        margin: 'auto',
        maxWidth: '700px'
    }

    function handleNewPostFormSubmission(event) {
        event.preventDefault();
        console.log(inputs);
    }

    //Take the value of material-ui text inputs and maps it to inputs object. This is most likely not best practice. Definitely check in with others to figure out better way. 
    function handleChange(event) {
        let input = event.target.value;
        inputs[event.target.name] = input;
    }
    
    let inputs = {};
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
                    name="username"
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
                <RaisedButton type="submit" label="Create Post" primary={true} />
            </form>
        </div>
    )
}

export default NewPostForm;