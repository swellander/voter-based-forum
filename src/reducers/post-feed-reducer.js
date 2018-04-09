export default (state = {}, action) => {
    switch (action.type) {
        case 'ADD_POST':
            const { title, userName, body, votes, id } = action;
            let newState = Object.assign({}, state, {
                [id]: {
                    title: title,
                    userName: userName,
                    body: body,
                    votes: votes,
                    id: id
                }
            });
            return newState;
        default:
            return state;
    }
}