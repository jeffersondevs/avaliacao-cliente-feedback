import React, { useState } from 'react';
import styles from './rating-card.module.css';
import { FaStar } from 'react-icons/fa';
import RatingButtons from './RatingButtons';

 const RatingCard = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (rating) => {
    setSelectedRating(rating);
  };

  const handleCommentChange = ({ target: { value } }) => {
    setComment(value);
  };
  const handleRatingSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.card}>
        <h1 className={styles.title}>Thank you for your feedback!</h1>
        <p className={styles.description}>
          We appreciate your time and effort to help us improve our offering.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleRatingSubmit}>
      <div className={styles.card}>
        <FaStar className={styles.star} />
        <div className={styles.text}>
          <h1 className={styles.title}>How did we do?</h1>
          <p className={styles.description}>
            Please let us know how we did with your support request. All
            feedback is appreciated to help is improve our offering!
          </p>
        </div>
        <RatingButtons 
          onRatingClick={handleRating} 
          selectedRating={selectedRating}
        />
        <textarea
          className={styles.commentField}
          value={comment}
          onChange={handleCommentChange}
          placeholder="Digite seus comentários e sugestões aqui..."
        />
        <button className={styles.submitButton} type="submit">
          submit
        </button>
      </div>
    </form>
  );
}

export default RatingCard;
