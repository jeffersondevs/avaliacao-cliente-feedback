import React, { useState } from 'react'
import styles from './rating-card.module.css'
import { FaStar } from 'react-icons/fa';

export default function RatingCard() {
  const [selctedRating, setSelectedRating] = useState([]);
  const [card, setCard] = useState('false');

  const handleRating = (e, rating) => {
    e.preventDefault();
    setSelectedRating(rating);
  };

  const handleRatingSubmit = (e) => {
    e.preventDefault();
    setCard(true);
    console.log('rating submitted', selctedRating);
  };

  if (card === true) {
    return (
      <div className={ styles.card }>
        <h1 className={ styles.title }>Thank you for your feedback!</h1>
        <p className={ styles.description }>We appreciate your time and effort to help us improve our offering.</p>
      </div>
    )
  }
  const renderRatingButtons = () => {
    return (
      <div className={ styles.buttonGroup }>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <button
              key={ratingValue}
              className={ styles.ratingButton }
              onClick={(e) => handleRating(e, ratingValue)}
            >  
              {ratingValue}
            </button>
          );
        })}
      </div>
    );
  };


    return (
      <form onSubmit={ handleRatingSubmit }>
        <div 
          className={ styles.card }
          >
          <FaStar className={ styles.star } />
          <div className={ styles.text }> 
            <h1 className={ styles.title }>How did we do?</h1>
            <p className={ styles.description }>Please let us know how we did with your support request. All feddback is appreciated to help is improve our offering!</p>
          </div>
          {renderRatingButtons()}
          <button 
            className={ styles.submitButton }
            type="submit"
            >
            submit
          </button>
        </div>
      </form>
    )
}