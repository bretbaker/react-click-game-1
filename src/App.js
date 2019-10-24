import React, { Component } from 'react';
import Images from './components/Images';
import './App.css';
import images from "./images.json";

class App extends Component {
  state = {
    images
  };

  renderRandom = () => {
    // let newArr = this.state.images;
    // const randSort = 
    this.state.images.sort((a, b) => {
      return 0.5 - Math.random();
    });
    // randSort();
    this.setState({ images })
    // console.log(props.images);
  }
    
  render() {
    console.log(this.state.images);
    return (
      <div className="App">
        <nav className="nav-div">
          <h1 id="game-title">React Click Game</h1>
          <h1>Click an Image to begin!</h1>
          <h1>Score: 0 | Top Score: 0</h1>
        </nav>
        <header className="head-section">
          <h1 id="main-header">React Click Game!</h1>
          <h4 id="secondary-header">Click on an image to earn points, but don't click on any more than once!</h4>
        </header>
        <div className="image-container">
          <Images images={this.state.images} renderRandom={this.renderRandom} key={this.state.images.id} />
        </div>
        <footer className="footer">
          <div id="empty-purple-div">
            {/* this is an empty div for spacing */}
          </div>
          <p id="foot-text">React Click Game &copy;</p>
        </footer>
      </div>
    );
  }
}

export default App;
