export default (state = {}, action) => {
    switch (action.type) {
        case 'ADD_POST':
            const { title, userName, body, id } = action;
            let newState = Object.assign({}, state, {
                [id]: {
                    title: title,
                    userName: userName,
                    body: body,
                    id: id
                }
            });
            return newState;
        default:
            return state;
    }
}