import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HomePageView from './views/HomePage';

class App extends Component {
  render() {
    return (
      <div>
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