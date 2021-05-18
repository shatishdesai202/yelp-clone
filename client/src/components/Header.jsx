import React, { useContext } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
import StarRating from "./StarRating";

const Header = ({ headerTitle }) => {
  const { selectedRestaurant } = useContext(RestaurantContext);

  console.log("header", selectedRestaurant);

  return (
    <>
      <div className="display-1 text-center">
        <div>{headerTitle}</div>
      </div>
      <div className="text-center">
        {selectedRestaurant &&
          selectedRestaurant.data &&
          selectedRestaurant.data[0] && (
            <StarRating
              rating={
                selectedRestaurant &&
                selectedRestaurant.data &&
                selectedRestaurant.data[0] &&
                selectedRestaurant.data[0].average_rating
              }
              totalcount={
                selectedRestaurant &&
                selectedRestaurant.data &&
                selectedRestaurant.data[0] &&
                selectedRestaurant.data[0].count
              }
            />
          )}
      </div>
    </>
  );
};

export default Header;
