import React, { useState, createContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = (props) => {
  const [restaurant, setRestaurant] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState({});

  const updateRestaurant = (newRestaurant) => {
    setRestaurant([...restaurant, newRestaurant]);
  };

  const fetchRestaurant = async (id) => {
    const data = await RestaurantFinder.get(`/${id}`);
    setSelectedRestaurant(data.data, data.reviews);
  };

  return (
    <RestaurantContext.Provider
      value={{
        restaurant,
        setRestaurant,
        updateRestaurant,
        selectedRestaurant,
        setSelectedRestaurant,
        fetchRestaurant,
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
};
