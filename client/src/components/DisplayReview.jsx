import React, { useContext } from "react";

import RestaurantFinder from "../apis/RestaurantFinder";

import { RestaurantContext } from "../context/RestaurantContext";
import StarRating from "./StarRating";

const DisplayReview = () => {
  const { selectedRestaurant, fetchRestaurant } = useContext(RestaurantContext);

  const handleDeleteReview = async (e, id) => {
    try {
      await RestaurantFinder.delete(`/review/delete/${id}`);
      fetchRestaurant(selectedRestaurant.data[0].id);
      // setSelectedRestaurant((prev) => ({
      //   data: [...prev.data],
      //   reviews: [...prev.reviews.filter((reviewID) => reviewID.id !== id)],
      // }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="m-5 d-flex row row-cols-4">
      {selectedRestaurant &&
        selectedRestaurant.reviews &&
        selectedRestaurant.reviews.map((reviews) => (
          <div class="card text-white bg-success  m-2" style={{ width: "30%" }}>
            <span
              className="btn btn-sm btn-danger"
              onClick={(e) => handleDeleteReview(e, reviews.id)}
            >
              delete
            </span>
            <div class="card-header d-flex justify-content-between">
              <h5 class="card-title">{reviews.name}</h5>
              <StarRating rating={reviews.rating} />
            </div>
            <div class="card-body">
              <p class="card-text">{reviews.review}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default DisplayReview;
