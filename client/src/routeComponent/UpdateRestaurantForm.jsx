import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Formik } from "formik";

import RestaurantFinder from "../apis/RestaurantFinder";
import Header from "../components/Header";

const UpdateRestaurantForm = () => {
  const { id } = useParams();
  const history = useHistory();
  const [restaurantData, setRestaurantData] = useState({});

  useEffect(() => {
    const fetchRestaurant = async () => {
      const { data } = await RestaurantFinder.get(`/${id}`);
      setRestaurantData(data.data[0]);
    };
    fetchRestaurant();
  }, []);

  const initialValues = {
    name: restaurantData.name || "",
    location: restaurantData.location || "",
    price_range: restaurantData.price_range || "",
  };

  const onSubmit = async (values, actions) => {
    try {
      await RestaurantFinder.put(`/${id}`, values);
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header headerTitle="Update Restaurant" />
      <div className="m-5">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {(props) => (
            <div className="mb-2 form-group">
              <form onSubmit={props.handleSubmit}>
                <div className="form-row mb-5">
                  <div className="col">
                    <input
                      type="text"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.name || ""}
                      name="name"
                      placeholder="Name"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-row mb-5">
                  <div className="col">
                    <input
                      type="text"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.location || ""}
                      name="location"
                      placeholder="Location"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-row mb-5">
                  <div className="col">
                    <select
                      className="form-select"
                      aria-label="Select Price Range"
                      name="price_range"
                      value={props.values.price_range}
                      onChange={props.handleChange}
                    >
                      <option value="1">$</option>
                      <option value="2">$$</option>
                      <option value="3">$$$</option>
                      <option value="4">$$$$</option>
                      <option value="5">$$$$$</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <button type="submit" className="btn btn-md btn-warning">
                      Update Restaurant
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UpdateRestaurantForm;
