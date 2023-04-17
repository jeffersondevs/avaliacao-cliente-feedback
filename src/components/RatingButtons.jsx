import PropTypes from 'prop-types';
import React from 'react';
import styles from './rating-card.module.css';

const RatingButtons = ({ onRatingClick, selectedRating }) => {
  return (
    <div className={styles.buttonGroup}>
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        return (
          <button
            key={ratingValue}
            type='button'
            className={`${styles.ratingButton} ${
                selectedRating === ratingValue
                  ? styles.selectedRatingButton
                  : ""
              }`}
            onClick={() => onRatingClick(ratingValue)}
          >
            {ratingValue}
          </button>
        );
      })}
    </div>
  );
};

RatingButtons.propTypes = {
    onRatingClick: PropTypes.func.isRequired,
    selectedRating: PropTypes.number.isRequired,
};

export default RatingButtons;
