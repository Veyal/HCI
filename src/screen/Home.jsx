import React, { Component } from 'react';
import logo from './../assets/logo1.png';
import {Link} from 'react-router-dom';

import category from './../assets/category.png';
import memorize from './../assets/memorize.png';
import guess from './../assets/guess.png';

import './Home.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="logo" alt="logo" />
          <p className="HowToPlayTitle">
            HOW TO PLAY?
          </p>
          <div className="HowToPlayContainer">
          <div className="HowToPlayImageContainer">
            <img src={category} className="img-thumbnail bg-dark" />
            <p className="text-light myThumbnailText">Choose Category</p>
          </div>
          <div className="HowToPlayImageContainer">
          <img src={memorize} className="img-thumbnail bg-dark" />
            <p className="text-light myThumbnailText">Memorize the image</p>
          </div>
          <div className="HowToPlayImageContainer">
            <img src={guess} className="img-thumbnail bg-dark" />
            <p className="text-light myThumbnailText">Guess the image</p>
          </div>
          </div>
          <Link to="/Category">
          <button type="button" className="btn btn-raised btn-primary bg-light btn-lg text-dark myButton">PLAY</button>
          </Link>
        </header>
      </div>
    );
  }
}

export default App;
