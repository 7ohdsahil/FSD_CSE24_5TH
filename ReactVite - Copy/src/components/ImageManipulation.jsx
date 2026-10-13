import React, { useState } from 'react';
import image from "../Images/Image1.png";

function ImageManipulation() {

  // Default image dimensions
  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(200);
  const [Image1Angle,setImage1Angle] = useState(30);
 
  // Functions
  function increaseHeight() {
    setHeight(height + 20);
  }

  function decreaseHeight() {
    setHeight(height - 20);
  }

  function increaseWidth() {
    setWidth(width + 20);
  }

  function decreaseWidth() {
    setWidth(width - 20);
  }

  function ImageRotate() {
  setImage1Angle(Image1Angle + 30);
}

  return (
    <div>
      <h2>Image Manipulation</h2>

      <div
        style={{
          border: '4px solid red',
          height: '300px',
          width: '300px',
          margin: 'auto',
        }}
      >
        <img
          src={image}
          height={height}
          width={width}
          style={{transform:`rotate(${Image1Angle}deg`}}
        />
      </div>

      <div>

        <button onClick={increaseHeight}>
          Increase Height
        </button>

        <button onClick={decreaseHeight}>
          Decrease Height
        </button>

        <button onClick={increaseWidth}>
          Increase Width
        </button>

        <button onClick={decreaseWidth}>
          Decrease Width
        </button>

        <button onClick={ImageRotate}> ImageRotate

        </button>

      </div>

    </div>
  );
}

export default ImageManipulation;