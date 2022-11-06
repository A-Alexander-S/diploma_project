import React, { useState } from "react";
import propTypes from 'prop-types';
import './rating.scss'

function Rating({
  isAcive
}) {
  const [ratingActiveWidth, setRatingActiveWidth] = useState(70);
  const grade = 3.5;

  const handleFocusStar = (e) => {
    if (!isAcive) {
      return;
    }
    if (e.currentTarget.value === '1') {
      setRatingActiveWidth(20);
    }
    if (e.currentTarget.value === '2') {
      setRatingActiveWidth(40);
    }
    if (e.currentTarget.value === '3') {
      setRatingActiveWidth(60);
    }
    if (e.currentTarget.value === '4') {
      setRatingActiveWidth(80);
    }
    if (e.currentTarget.value === '5') {
      setRatingActiveWidth(100);
    }
  }

  const handleRatingItemsMouseLeave = () => {
    setRatingActiveWidth(grade / 0.05);
  }

  return (
    <div className="rating">
      <div className="rating__body">
        <div
          className="rating__active"
          style={{ width: `${ratingActiveWidth}%` }}
        ></div>
        <div
          className="rating__items"
          onMouseLeave={handleRatingItemsMouseLeave}
        >
          <input
            className="rating__item"
            type="radio"
            name="rating"
            value={1}
            data-rating-item="1"
            onMouseEnter={handleFocusStar}
          />
          <input
            className="rating__item"
            type="radio"
            name="rating"
            value={2}
            onMouseEnter={handleFocusStar}
          />
          <input
            className="rating__item"
            type="radio"
            name="rating"
            value={3}
            onMouseEnter={handleFocusStar}
          />
          <input
            className="rating__item"
            type="radio"
            name="rating"
            value={4}
            onMouseEnter={handleFocusStar}
          />
          <input
            className="rating__item"
            type="radio"
            name="rating"
            value={5}
            onMouseEnter={handleFocusStar}
          />
        </div>
      </div>
    </div>
  )
}

Rating.propTypes = {
  isAcive: propTypes.bool
}

export default React.memo(Rating);