import React, { useState, useEffect } from 'react';
import './Slider.css'; // Import your CSS file for styling
import Slide1 from './Components/Slide1';
import Slide2 from './Components/Slide2';
import Slide3 from './Components/Slide3';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [<Slide1 />, <Slide2 />, <Slide3 />];

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Automatic sliding every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [slideIndex]);

  return (
    <div className="slider-container">
      <div className="slider">
        <div
          className="slide-content"
          style={{
            transform: `translateX(-${(100 / slides.length) * slideIndex}%)`,
            width: `${slides.length * 100}%`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="slide"
              style={{ width: `${100 / slides.length}%` }}
            >
              {slide}
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="slider-button prev-button">
          {"<"}
        </button>
        <button onClick={nextSlide} className="slider-button next-button">
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Slider;
