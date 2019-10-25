import React, { Component } from 'react';
import PropTypes from "prop-types";
// import "./game.css";

export class IndImage extends Component {
  
  clicked = () => {
    if (this.props.image.clicked === false) {
      this.props.image.clicked = true;
      console.log(this.props.image);
    } else if (this.props.image.clicked) {
      // console.log("You already clicked this one!");
      this.props.gameOver();
    }
  }

  render() {
    // console.log(this.props.image);
    // console.log(this.props.topScore);
    return (
      <img style={{ width: "150px" }} src={this.props.image.url} alt={"image-" + this.props.image.id} value={this.props.image.id} key={this.props.image.id} onClick={this.clicked}/>
    )
  }
}

// PropTypes
IndImage.propTypes = {
  image: PropTypes.object.isRequired,
  gameOver: PropTypes.func.isRequired
}

export default IndImage;
