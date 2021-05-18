import React from "react";

import Header from "../components/Header";
import AddRestaurantForm from "../components/AddRestaurantForm";
import RestaurantList from "../components/RestaurantList";

const Home = () => {
  return (
    <div>
      <Header headerTitle="Restaurant" />
      <div className="m-2">
        <AddRestaurantForm />
        <RestaurantList />
      </div>
    </div>
  );
};

export default Home;
