import React, { useEffect, useState } from 'react';
import './Background.css';
import { imageSlide } from '../../data/Data'; // Ensure this file contains your slide data

const Background = () => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentState((prevState) => (prevState === imageSlide.length - 1 ? 0 : prevState + 1));
    }, 5000);

    return () => clearTimeout(timer); // Clear timeout on component unmount
  }, [currentState]);

  // Inline styles for dynamic background image
  const bgImgStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%',
  };

  // Navigate to a specific slide
  const goToNext = (index) => {
    setCurrentState(index);
  };

  return (
    <div className="container-style">
      <div style={bgImgStyle}>
        <div className="transparent-background"></div>

        <div className="description">
          <h1>{imageSlide[currentState].title}</h1>
          <p>{imageSlide[currentState].body}</p>
        </div>

        <div className="carousel-boullt">
          {imageSlide.map((_, index) => (
            <span
              key={index}
              className={index === currentState ? 'active-bullet' : ''}
              onClick={() => goToNext(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Background;
