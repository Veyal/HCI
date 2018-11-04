import React, { Component } from 'react';
import './Guess.css'; 
import gambar from '../assets/kecap.png';


class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={gambar} className="img-thumbnail bg-dark myImage"/>
        <div className="myHintContainer">
          <div className="myHint">
          </div>
          <div className="myHint">
          </div>
          <div className="myHint">
          </div>
          <div className="myHint">
          </div>
          <div className="myHint">
          </div>
        </div>
        <div className="myButtonContainer">
        <div className="myButtonContainerChild">
          <button className="myButton1">K</button>
          <button className="myButton1">B</button>
          <button className="myButton1">E</button>
          <button className="myButton1">C</button>
          <button className="myButton1">F</button>
        </div>
        <div className="myButtonContainerChild">
          <button className="myButton1">D</button>
          <button className="myButton1">H</button>
          <button className="myButton1">L</button>
          <button className="myButton1">K</button>
          <button className="myButton1">C</button>
        </div>
        <div className="myButtonContainerChild">
          <button className="myButton1">G</button>
          <button className="myButton1">I</button>
          <button className="myButton1">Q</button>
          <button className="myButton1">A</button>
          <button className="myButton1">Z</button>
        </div>
        <div className="myButtonContainerChild">
          <button className="myButton1">M</button>
          <button className="myButton1">J</button>
          <button className="myButton1">O</button>
          <button className="myButton1">P</button>
          <button className="myButton1">R</button>
        </div>
        
      </div>
      </header>

      
      </div>
      );
    }
  }
  
  export default App;
