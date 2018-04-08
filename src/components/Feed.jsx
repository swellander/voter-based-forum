import React from 'react';
import Post from './Post.jsx';

const seedFeed = {
    '0': {
        title: 'My Opinion',
        votes: 25,
        userName: 'wellander08',
        postBody: 'Lorem ipsum dolor amet letterpress authentic single-origin coffee jean shorts keffiyeh crucifix kogi neutra hexagon fashion axe gentrify hot chicken bicycle rights snackwave post-ironic. Ennui pok pok readymade pickled. Shaman affogato hot chicken intelligentsia unicorn occupy brooklyn celiac chicharrones keytar wolf pitchfork hella. Bespoke gastropub jianbing brunch. Blue bottle jianbing poutine, hella selvage salvia typewriter organic DIY thundercats post-ironic flexitarian chillwave. Yuccie craft beer narwhal gentrify microdosing 8-bit ennui pug. Cold-pressed vexillologist mlkshk fashion axe actually seitan mumblecore ramps.',
        id: 0
    },
    '1': {
        title: 'The State of the \'States',
        votes: 45,
        userName: 'politicallychargedindividual45',
        postBody: 'Selvage af occupy trust fund poke whatever. Offal YOLO try-hard fam butcher ethical schlitz, hella DIY af. Sustainable ethical shaman echo park. Coloring book shabby chic hoodie intelligentsia. Fixie hell of viral, cornhole poke four dollar toast chicharrones before they sold out lumbersexual synth banjo direct trade unicorn. Put a bird on it wayfarers chia prism umami. Bicycle rights hell of aesthetic, vaporware hashtag brooklyn chillwave locavore vice disrupt actually kickstarter.',
        id: 1
    },
    '2': {
        title: 'Liverpool gon win!',
        votes: 14,
        userName: 'futbolswooncool',
        postBody: 'Mlkshk tote bag roof party, yuccie shabby chic four dollar toast salvia asymmetrical migas offal. Roof party adaptogen normcore, brooklyn small batch paleo shabby chic lumbersexual everyday carry 8-bit iPhone. Whatever bicycle rights activated charcoal pinterest, tilde pop-up ramps bespoke semiotics. Disrupt microdosing swag hell of tote bag aesthetic pabst wayfarers taxidermy food truck squid flannel.',
        id: 2
    }
}

function Feed() {
    return (
        <div>
            {Object.keys(seedFeed).map(function(postId) {
                let post = seedFeed[postId];
                return <Post title={post.title}
                    votes={post.votes}
                    userName={post.userName}
                    postBody={post.postBody}
                    key={post.id} />
            })}
        </div>
    )
};

export default Feed;