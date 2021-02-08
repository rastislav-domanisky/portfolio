import './App.scss';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import Skills from './views/Skills';
import Projects from './views/Projects';
import Contact from './views/Contact';
import Project from './views/Project';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/skills"><Skills /></Route>
            <Route path="/projects/:id"><Project /></Route>
            <Route path="/projects"><Projects /></Route>
            <Route path="/contact"><Contact /></Route>
            <Route path="/"><Home /></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;