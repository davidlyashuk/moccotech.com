import React from 'react';
import { ReviewsInterface } from '@/interfaces/reviews';
import ReviewCard from './ReviewCard';

export default function ReviewsList({
  reviews,
}: {
  reviews: ReviewsInterface[];
}) {
  return (
    <div className="grid grod-cols-1 sm:grid-cols-3 gap-5 mt-10">
      {reviews.map((review) => {
        return (
          <ReviewCard
            key={review._id}
            _id={review._id}
            author={review.author}
            position={review.position}
            review={review.review}
            avatar={review.avatar}
          />
        );
      })}
    </div>
  );
}
