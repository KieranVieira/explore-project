import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import HomePageView from './views/HomePageView.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route 
          exact
          path='/'
          component={HomePageView}
        />
      </div>
    );
  }
}

export default App;