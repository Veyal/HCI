import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Home from './screen/Home';
import Category from './screen/Category';
import Things from './screen/Things';
import Sign from './screen/Sign';
import Computer from './screen/Computer';
import Guess from './screen/Guess';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {Home}
          <Route exact path="/" component={Home}/>
          <Route exact path="/Category" component={Category}/>
          <Route exact path="/Things" component={Things}/>
          <Route exact path="/Sign" component={Sign}/>
          <Route exact path="/Computer" component={Computer}/>
          <Route exact path="/Guess" component={Guess}/>
        </div>
       </Router>
    );
  }
}

export default App;
