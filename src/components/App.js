import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../styles/App.css';
import Home from './home/home';
import CreatePage from './create/createPage';
import SavesPage from './saves/savesPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/create' component={CreatePage} />
            <Route path='/saved' component={SavesPage} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
