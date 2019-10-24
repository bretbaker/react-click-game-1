import React from 'react';
import PropTypes from "prop-types";
import "./game.css";

function Images(props) {
  console.log(props.images);

  return (
    props.images.map((image) => (
      <img className="image-div" onMouseDown={props.clicked} onMouseUp={props.renderRandom} src={image.image} alt={"image-" + image.id} value={image.id} key={image.id}/>
    ))
  );
}

// PropTypes
Images.propTypes = {
  images: PropTypes.array.isRequired
}


export default Images;
