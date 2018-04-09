import React from 'react';
import Post from './Post.jsx';
import PropTypes from 'prop-types';

function Feed(props) {
    let styles = {
        margin: 'auto',
        maxWidth: '700px'    }
    return (
        <div style={styles}>
            {Object.keys(props.postList).map(function(postId) {
                let post = props.postList[postId];
                return <Post title={post.title}
                    votes={post.votes}
                    userName={post.userName}
                    body={post.body}
                    key={post.id} />
            })}
        </div>
    )
};

Feed.propTypes = {
    postList: PropTypes.object
}

export default Feed;