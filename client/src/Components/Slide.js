import React from 'react';
import classNames from 'classnames';
import './Slides.css';

const Slide = ({ slide, isActive, isPrev }) => (
  <div className={classNames('slider__slide', { 's--active': isActive, 's--prev': isPrev })}>
    <div className="slider__slide-content">
      <h3 className="slider__slide-subheading">{slide.country}</h3>
      <h4 className="slider__slide-heading">
      {slide.city}
      </h4>
      <p className="slider__slide-readmore">READ MORE</p>
    </div>
    <div className="slider__slide-image" style={{ backgroundImage: `url(${slide.img})` }} />
  </div>
);

export default Slide;