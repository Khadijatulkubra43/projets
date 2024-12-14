import React, { useState, useRef } from "react";
import Webcam from "react-webcam";

const CameraPage = () => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  // Function to capture an image from the camera
  const captureImage = () => {
    const image = webcamRef.current.getScreenshot();
    setImageSrc(image);
  };

  // Function to handle image upload from the gallery
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h2>Camera and Gallery Example</h2>

      {/* Webcam stream */}
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={captureImage}>Capture from Camera</button>

      {/* Image upload from gallery */}
      <input type="file" accept="image/*" onChange={handleImageUpload} />

      {/* Display captured or uploaded image */}
      {imageSrc && (
        <div>
          <h3>Captured/Uploaded Image:</h3>
          <img src={imageSrc} alt="Captured or Uploaded" />
        </div>
      )}
    </div>
  );
};

export default CameraPage;
