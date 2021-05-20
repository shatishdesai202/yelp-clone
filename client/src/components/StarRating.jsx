import React from "react";

const StarRating = ({ rating, totalcount }) => {
  const star = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      star.push(<i key={i} className="fas fa-star"></i>);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      star.push(<i key={i} className="fas fa-star-half-alt"></i>);
    } else {
      star.push(<i key={i} className="far fa-star"></i>);
    }
  }

  return (
    <div>
      {star} {totalcount ? <span>({totalcount})</span> : null}
    </div>
  );
};

export default StarRating;
