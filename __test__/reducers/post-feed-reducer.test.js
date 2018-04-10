import postFeedReducer from './../../src/reducers/post-feed-reducer';
import Moment from 'moment'; 


describe('postFeedReducer', () => {
    let action;
    const samplePostData = {
        title: 'The Long and Winding Road',
        userName: 'wellander08',
        body: 'Shaman affogato hot chicken intelligentsia unicorn occupy brooklyn celiac chicharrones keytar wolf pitchfork hella. Bespoke gastropub jianbing brunch. Blue bottle jianbing poutine, hella selvage salvia typewriter organic DIY thundercats post-ironic flexitarian chillwave. Yuccie craft beer narwhal gentrify microdosing 8-bit ennui pug. Cold-pressed vexillologist mlkshk fashion axe actually seitan mumblecore ramps.',
        votes: 15,
        timeSubmitted: new Moment(),
        id: 342
    }

    const { title, userName, body, votes, timeSubmitted, id } = samplePostData;

    const sampleState = {
        [id]: {
            title: title,
            userName: userName,
            body: body,
            votes: votes,
            timeSubmitted: timeSubmitted,
            id: id
        }
    }

    test('Should return initial state when no action is recognized', () => {
        expect(postFeedReducer({}, { type: null })).toEqual({});
    })

    test('Should successfully add a post to masterPostFeed state slice', () => {
        action = {
            type: 'ADD_POST',
            title: title,
            userName: userName,
            body: body,
            votes: votes,
            timeSubmitted: timeSubmitted,
            id: id
        }

        expect(postFeedReducer({}, action)).toEqual({
            [id]: {
                title: title,
                userName: userName,
                body: body,
                votes: votes,
                timeSubmitted: timeSubmitted,
                id: id
            }
        })
    })

    test('Should update formattedTime key with current elapsed time', () => {
        expect(postFeedReducer(sampleState, { type: 'FORMAT_TIME' })).toEqual({
            [id]: {
                title: title,
                userName: userName,
                body: body,
                votes: votes,
                timeSubmitted: timeSubmitted,
                formattedTime: timeSubmitted.fromNow(true),
                id: id
            }
        })
    });

    test('Should successfully update votes', () => {
        expect(postFeedReducer(sampleState, { type: 'CHANGE_VOTE', amount: 1 })).toEqual({
            [id]: {
                title: title,
                userName: userName,
                body: body,
                votes: (votes + 1),
                timeSubmitted: timeSubmitted,
                formattedTime: timeSubmitted.fromNow(true),
                id: id
            }
        })
    })

});