import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const stars = [];

  // Whole stars
  for (let i = 1; i <= Math.floor(rating); i++) {
    stars.push(<FaStar key={i} />);
  }

  // Half star
  if (rating % 1 !== 0) {
    stars.push(<FaStarHalfAlt key={'half'} />);
  }

  // Empty stars
  while (stars.length < totalStars) {
    stars.push(<FaRegStar key={stars.length + 1} />);
  }

  return <div>{stars}</div>;
};

export default StarRating;
