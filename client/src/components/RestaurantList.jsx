import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantContext } from "../context/RestaurantContext";

import StarRating from "../components/StarRating";

const RestaurantList = () => {
  const history = useHistory();
  const { restaurant, setRestaurant } = useContext(RestaurantContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await RestaurantFinder.get("/");
        setRestaurant(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      await RestaurantFinder.delete(`/${id}`);
      setRestaurant(restaurant.filter((restaurant) => restaurant.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    history.push(`/${id}/update`);
  };

  const handleSelectedRestaurant = (id) => {
    history.push(`/review/${id}`);
  };

  return (
    <div className="m-5">
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Sr No.</th>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">Price-Range</th>
            <th scope="col">Rating</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurant &&
            restaurant.map((restaurant, index) => (
              <tr
                key={restaurant.id}
                onClick={() => handleSelectedRestaurant(restaurant.id)}
              >
                <th scope="row">{index + 1}</th>
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{"$".repeat(restaurant.price_range)}</td>
                <td>
                  {restaurant.average_rating ? (
                    <StarRating
                      rating={restaurant.average_rating}
                      totalcount={restaurant.count}
                    />
                  ) : (
                    <span className="text-warning"> No review </span>
                  )}
                </td>
                <td>
                  <button
                    onClick={(e) => handleUpdate(e, restaurant.id)}
                    className="btn btn-sm btn-warning"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={(e) => handleDelete(e, restaurant.id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
