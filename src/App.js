import React, { Component } from 'react';
import Images from './components/Images';
import './App.css';
// import images from "./images.json";

class App extends Component {
  state = {
    images: [
      {
        id: 1,
        url: "https://picsum.photos/id/0/200/200",
        clicked: false
      },
      {
        id: 2,
        url: "https://picsum.photos/id/1/200/200",
        clicked: false
      },
      {
        id: 3,
        url: "https://picsum.photos/id/2/200/200",
        clicked: false
      },
      {
        id: 4,
        url: "https://picsum.photos/id/3/200/200",
        clicked: false
      },
      {
        id: 5,
        url: "https://picsum.photos/id/4/200/200",
        clicked: false
      },
      {
        id: 6,
        url: "https://picsum.photos/id/5/200/200",
        clicked: false
      },
      {
        id: 7,
        url: "https://picsum.photos/id/6/200/200",
        clicked: false
      },
      {
        id: 8,
        url: "https://picsum.photos/id/7/200/200",
        clicked: false
      },
      {
        id: 9,
        url: "https://picsum.photos/id/8/200/200",
        clicked: false
      },
      {
        id: 10,
        url: "https://picsum.photos/id/9/200/200",
        clicked: false
      },
      {
        id: 11,
        url: "https://picsum.photos/id/10/200/200",
        clicked: false
      },
      {
        id: 12,
        url: "https://picsum.photos/id/11/200/200",
        clicked: false
      }
    ],
    topScore: 0
  };

  renderRandom = () => {
    let images = this.state.images;
    let topScore = this.state.topScore;
    images.sort((a, b) => {
      return 0.5 - Math.random();
    });
    this.setState({ images })
    let scoreboard = document.getElementById("scoreboard");
    let count = 0;
    for (let i = 0; i < images.length; i++) {
      if (images[i].clicked) {
        count++;
      }
      if (count < topScore) {
        topScore += 0;
      } else if (count >= topScore) {
        topScore = count;
      }
    }
    this.setState({ topScore })
    scoreboard.innerHTML = "Score: " + count + " | Top Score: " + topScore;
    let directive = document.getElementById("directive");
    if (count === 0) {
      directive.innerHTML = "You guessed incorrectly!";
      directive.setAttribute('style', 'color: red;');
      let changeWhite = () => {
        directive.setAttribute('style', 'color: white;');
      }
      setTimeout(changeWhite, 300);
    } else if (count > 0) {
      directive.innerHTML = "You guessed correctly!";
      directive.setAttribute('style', 'color: green;');
      let changeWhite = () => {
        directive.setAttribute('style', 'color: white;');
      }
      setTimeout(changeWhite, 300);
    }
  }

  gameOver = () => {
    let images = this.state.images;
    for (let i = 0; i < images.length; i++) {
      images[i].clicked = false;
    }
    this.setState({ images })
    let scoreboard = document.getElementById("scoreboard");
    let count = 0;
    let topScore = this.state.topScore;
    scoreboard.innerHTML = "Score: " + count + " | Top Score: " + topScore;
  }

  refresh = () => {
    window.location.reload();
  }
    
  render() {
    console.log(this.state.images);
    return (
      <div className="App">
        <nav className="nav-div">
          <h1 id="game-title" onClick={this.refresh}>React Click Game</h1>
          <h1 id="directive">Click an Image to begin!</h1>
          <h1 id="scoreboard">Score: 0 | Top Score: 0</h1>
        </nav>
        <header className="head-section">
          <h1 id="main-header">React Click Game!</h1>
          <h4 id="secondary-header">Click on an image to earn points, but don't click on any more than once!</h4>
        </header>
        <div className="image-container">
          <Images images={this.state.images} key={this.state.images.id} randomize={this.renderRandom} gameOver={this.gameOver}/>
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
