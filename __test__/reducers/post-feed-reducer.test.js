import postFeedReducer from './../../src/reducers/post-feed-reducer';

describe('postFeedReducer', () => {
    let action;
    const samplePostData = {
        title: 'The Long and Winding Road',
        userName: 'wellander08',
        body: 'Shaman affogato hot chicken intelligentsia unicorn occupy brooklyn celiac chicharrones keytar wolf pitchfork hella. Bespoke gastropub jianbing brunch. Blue bottle jianbing poutine, hella selvage salvia typewriter organic DIY thundercats post-ironic flexitarian chillwave. Yuccie craft beer narwhal gentrify microdosing 8-bit ennui pug. Cold-pressed vexillologist mlkshk fashion axe actually seitan mumblecore ramps.',
        id: 342
    }

    test('Should return initial state when no action is recognized', () => {
        expect(postFeedReducer({}, { type: null })).toEqual({});
    })

    test('Should successfully add a post to masterPostFeed state slice', () => {
        const { title, userName, body, id } = samplePostData;
        action = {
            type: 'ADD_POST',
            title: title,
            userName: userName,
            body: body,
            id: id
        }

        expect(postFeedReducer({}, action)).toEqual({
            [id]: {
                title: title,
                userName: userName,
                body: body,
                id: id
            }
        })
    })
});