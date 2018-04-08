import React from 'react';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router-dom';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const Header = () => (
  <AppBar
    title={<Link to='/'>Vote-Based Forum</Link>}
    iconElementRight={<Link to='/newPost'><FloatingActionButton><ContentAdd /></FloatingActionButton></Link>}
  />
);

export default Header;