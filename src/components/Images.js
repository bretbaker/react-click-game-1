import React, { Component } from 'react';
import IndImage from './IndImage';
import PropTypes from "prop-types";
import "./game.css";

class Images extends Component {

  render() {
    console.log(this.props.images);

    return (
      this.props.images.map((e) => (
        <div className="image-div" onClick={this.props.randomize} key={-(e.id)}>
          <IndImage image={e} key={e.id} gameOver={this.props.gameOver}/>
        </div>
      ))
    );
  }
}

// PropTypes
Images.propTypes = {
  images: PropTypes.array.isRequired,
  gameOver: PropTypes.func.isRequired
}


export default Images;
