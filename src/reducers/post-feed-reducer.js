export default (state = {}, action) => {
    let newState;
    switch (action.type) {
        case 'ADD_POST':
            const { title, userName, body, votes, timeSubmitted, id } = action;
            newState = Object.assign({}, state, {
                [id]: {
                    title: title,
                    userName: userName,
                    body: body,
                    votes: votes,
                    timeSubmitted: timeSubmitted,
                    id: id
                }
            });
            return newState;

        case 'FORMAT_TIME':
            newState = Object.assign({}, state);
            Object.keys(newState).map(function(postId) {
                let post = newState[postId];
                post.formattedTime = (post.timeSubmitted).fromNow(true);
            });
            return newState;
        
        case 'CHANGE_VOTE': 
            newState = Object.assign({}, state);
            newState[action.id].votes = newState[action.id].votes + action.amount
            return newState;
            
        default:
            return state;
    }
}