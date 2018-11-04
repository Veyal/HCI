import React, { Component } from 'react';
import logo from './../assets/hypnotist-circle.png';
import {Link} from 'react-router-dom';

import things from './../assets/things.jpg';
import sign from './../assets/sign.jpg';
import computer from './../assets/computer.gif';

import './Category.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="HowToPlayTitle">
            CATEGORY
          </p>
          <div className="HowToPlayContainer">
          <Link to="/Guess">
          <div className="HowToPlayImageContainer">
            <img src={things} className="img-thumbnail bg-dark myImage" />
            <p className="text-light myThumbnailText">THINGS</p>
          </div>
          </Link>
          
          <Link to="/Sign">
          <div className="HowToPlayImageContainer">
          <img src={sign} className="img-thumbnail bg-dark myImage" />
            <p className="text-light myThumbnailText">SIGN</p>
          </div>
          </Link>

          <Link to="/Computer">
          <div className="HowToPlayImageContainer">
            <img src={computer} className="img-thumbnail bg-dark myImage" />
            <p className="text-light myThumbnailText">COMPUTER</p>
          </div>
          </Link>
          
          </div>
        </header>
      </div>
    );
  }
}

export default App;
