import { useState } from 'react';
import reviews from '../content/reviews'
import './Reviews.css'

const Reviews = () => {
    const [currentReview, setCurrentReview] = useState(1);

    const prevSlide = () => {
        setCurrentReview((prevIndex) =>
          prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
      };
    
      const nextSlide = () => {
        setCurrentReview((prevIndex) =>
          prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
      };

    return (
        <div className="reviews-slider">
            <h1>Reviews</h1>
            <div className='review-content'>
                <div className='review-text'>
                    <p key={reviews[currentReview].id}>{reviews[currentReview].text}</p>
                    <p>- {reviews[currentReview].author}</p>
                </div>
                <div className='button-container'>
                    <button onClick={prevSlide}>prev</button>
                    <button onClick={nextSlide}>next</button>
                </div>
            </div>
            
        </div>
    );
}

export default Reviews;