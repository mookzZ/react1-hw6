import React, { useState } from 'react';

const Slider = ({ photos }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length)
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length)
    };

    return (
        <div className="slider">
            <img src={photos[currentIndex]} alt={`Slide ${currentIndex}`} />
            <div className="controls">
                <button onClick={goToPrevSlide}>Назад</button>
                <button onClick={goToNextSlide}>Далее</button>
            </div>
        </div>
    );
};

export default Slider;
