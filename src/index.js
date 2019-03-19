import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import './index.css';
import App from './App';

const AppWithRouter = withRouter(App)

ReactDOM.render(
<ParallaxProvider>
    <Router>
        <AppWithRouter />
    </Router>
</ParallaxProvider>
, document.getElementById('root'));