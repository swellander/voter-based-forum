import React from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import KeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import { connect } from 'react-redux';

const VoteCounter = (props) => {
    let styles = props.style;
    let voteStyles = {
        margin: '0 0 0 4px'
    }
    let arrowStyles = {
        
    }
    const { dispatch } = props;

    function downVote(id) {
        console.log('DOWN');
        let action = {
            type: 'CHANGE_VOTE',
            amount: -1,
            id: id
        }
        dispatch(action);
    }

    function upVote(id) {
        console.log('UP');
        let action = {
            type: 'CHANGE_VOTE',
            amount: 1,
            id: id
        }
        dispatch(action);
    }
    return (
        <div style={styles}>
            <KeyboardArrowUp 
                onClick={()=> upVote(props.id)} 
                hoverColor='#F49D37'
            />
            <p style={voteStyles}>{props.votes}</p>
            <KeyboardArrowDown 
                onClick={()=> downVote(props.id)} 
                  hoverColor='#F49D37'
            />
        </div>
    )
}

VoteCounter.propTypes = {
    votes: PropTypes.number
}

export default connect()(VoteCounter);