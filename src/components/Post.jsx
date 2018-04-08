import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
    return (
        <div>
            <h2><span>UP</span> <span>DOWN</span> {props.votes} | {props.title}</h2>
            <h4><em>User: {props.userName}</em></h4>
            <p>{props.postBody}</p>
            <hr/>
        </div>
    )
}

Post.propTypes = {
    title: PropTypes.string,
    userName: PropTypes.string,
    postBody: PropTypes.string
}

export default Post;