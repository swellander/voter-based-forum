import React from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import KeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';

const VoteCounter = (props) => {
    let styles = props.style;
    let voteStyles = {
        margin: '0 0 0 4px'
    }
    return (
        <div style={styles}>
            <KeyboardArrowUp />
            <p style={voteStyles}>{props.votes}</p>
            <KeyboardArrowDown />
        </div>
    )
}

VoteCounter.propTypes = {
    votes: PropTypes.number
}

export default VoteCounter;