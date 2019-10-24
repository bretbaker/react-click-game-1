import React from 'react';
// import GameItem from "./GameItem";
import PropTypes from "prop-types";
import "./game.css";

function Images(props) {
  console.log(props.images);
  // props.renderRandom();

  return (
    props.images.map((image) => (
        <img className="image-div" onClick={props.renderRandom} src={image.image} alt={image.id} key={image.id}/>
    ))
  );
}

// PropTypes
Images.propTypes = {
  images: PropTypes.array.isRequired
}


export default Images;
