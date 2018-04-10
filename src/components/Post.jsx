import React from 'react';
import PropTypes from 'prop-types';
import VoteCounter from './VoteCounter.jsx';

function Post(props) {
    console.log(props.formattedTime);
    let containerStyles = {
        display: 'grid',
        gridTemplateRows: '2% 2% auto',
        gridTemplateColumns: '15% 25% auto'
    }

    let voteCounterStyles = {
        gridRowStart: '1',
        gridRowEnd: '2',
        gridColumnStart: '1',
        gridColumnEnd: '2',
        alignSelf: 'center',
        justifySelf: 'center'
    }
    let titleStyles = {
        gridRowStart: '1',
        gridRowEnd: '2',
        gridColumnStart: '2',
        gridColumnEnd: '3'
    }
    let userNameStyles = {
        gridRowStart: '2',
        gridColumnStart: '2',
        gridColumnEnd: 'end',
        marginTop: '0'
    }
    let bodyStyles = {
        gridRowStart: '3',
        gridColumnStart: '2',
        gridColumnEnd: 'end'
    }

    //initial posts load without a formattedTime so in the 30 seconds before they update, list 'Submitted just now'
    let time;
    if (props.formattedTime) {
        time = props.formattedTime + ' ago'
    } else {
        time = 'just now';
    }


    return (
        <div style={containerStyles}>
            <VoteCounter id={props.id} style={voteCounterStyles} votes={props.votes}/><h2 style={titleStyles}>{props.title}</h2>
            <p style={userNameStyles}>Submitted {time} by <em>{props.userName}</em></p>
            <div style={bodyStyles}>
                <p>{props.body}</p>
                <hr/>
            </div>
            
        </div>
    )
}

Post.propTypes = {
    title: PropTypes.string,
    userName: PropTypes.string,
    body: PropTypes.string,
    votes: PropTypes.number,
    formattedTime: PropTypes.string
}

export default Post;