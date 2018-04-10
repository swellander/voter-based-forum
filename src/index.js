import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import postFeedReducer from './reducers/post-feed-reducer';

const store = createStore(postFeedReducer);


ReactDOM.render(
    <HashRouter>    
        <MuiThemeProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </MuiThemeProvider>
    </HashRouter>,

    document.getElementById('root'));
registerServiceWorker();
