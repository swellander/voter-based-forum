import React from 'react';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

const seedFeed = {
  '0': {
      title: 'My Opinion',
      votes: 25,
      userName: 'wellander08',
      body: 'Lorem ipsum dolor amet letterpress authentic single-origin coffee jean shorts keffiyeh crucifix kogi neutra hexagon fashion axe gentrify hot chicken bicycle rights snackwave post-ironic. Ennui pok pok readymade pickled. Shaman affogato hot chicken intelligentsia unicorn occupy brooklyn celiac chicharrones keytar wolf pitchfork hella. Bespoke gastropub jianbing brunch. Blue bottle jianbing poutine, hella selvage salvia typewriter organic DIY thundercats post-ironic flexitarian chillwave. Yuccie craft beer narwhal gentrify microdosing 8-bit ennui pug. Cold-pressed vexillologist mlkshk fashion axe actually seitan mumblecore ramps.',
      id: 0
  },
  '1': {
      title: 'The State of the \'States',
      votes: 45,
      userName: 'politicallychargedindividual45',
      body: 'Selvage af occupy trust fund poke whatever. Offal YOLO try-hard fam butcher ethical schlitz, hella DIY af. Sustainable ethical shaman echo park. Coloring book shabby chic hoodie intelligentsia. Fixie hell of viral, cornhole poke four dollar toast chicharrones before they sold out lumbersexual synth banjo direct trade unicorn. Put a bird on it wayfarers chia prism umami. Bicycle rights hell of aesthetic, vaporware hashtag brooklyn chillwave locavore vice disrupt actually kickstarter.',
      id: 1
  },
  '2': {
      title: 'Liverpool gon win!',
      votes: 14,
      userName: 'futbolswooncool',
      body: 'Mlkshk tote bag roof party, yuccie shabby chic four dollar toast salvia asymmetrical migas offal. Roof party adaptogen normcore, brooklyn small batch paleo shabby chic lumbersexual everyday carry 8-bit iPhone. Whatever bicycle rights activated charcoal pinterest, tilde pop-up ramps bespoke semiotics. Disrupt microdosing swag hell of tote bag aesthetic pabst wayfarers taxidermy food truck squid flannel.',
      id: 2
  }
}



const Header = (props) => {

  function seed() {
    const { dispatch } = props;
    Object.keys(seedFeed).map(function(seedPostId) {
        const { title, userName, body, id, votes } = seedFeed[seedPostId];
        let action = {
            type: 'ADD_POST',
            title: title,
            userName: userName,
            body: body,
            votes: votes,
            id: id
        }
        dispatch(action);
    });
  }


  return (
    <div>
      <AppBar
        title={<Link to='/'>Vote-Based Forum</Link>}
        iconElementRight={<Link to='/newPost'><FloatingActionButton><ContentAdd /></FloatingActionButton></Link>}
      />
      <RaisedButton 
        label='Seed'
        onClick={()=>{seed()}}
      />
    </div>
  );
}

export default connect()(Header);