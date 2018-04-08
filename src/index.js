import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



ReactDOM.render(
    <HashRouter>    
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </HashRouter>,

    document.getElementById('root'));
registerServiceWorker();
