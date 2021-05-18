import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";

import RestaurantFinder from "../apis/RestaurantFinder";
import DisplayReview from "../components/DisplayReview";

import Header from "../components/Header";
import ReviewForm from "../components/ReviewForm";
import StarRating from "../components/StarRating";
import { RestaurantContext } from "../context/RestaurantContext";

const ReviewRestaurant = () => {
  const { id } = useParams();

  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantContext);

  useEffect(() => {
    const fetchRestaurant = async () => {
      const data = await RestaurantFinder.get(`/${id}`);  
      setSelectedRestaurant(data.data, data.reviews);
    };
    fetchRestaurant();
  }, []);


  console.log('review Restaurant @@@@@@@@@@@@@',selectedRestaurant)

  return (
    <div>
      <Header
        headerTitle={
          selectedRestaurant &&
          selectedRestaurant.data &&
          selectedRestaurant.data[0] &&
          selectedRestaurant.data[0].name
        }
      />

      <DisplayReview  />
      <ReviewForm />
    </div>
  );
};

export default ReviewRestaurant;
