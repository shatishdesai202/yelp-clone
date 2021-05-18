import React, { useContext } from "react";
import { Formik } from "formik";

import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantContext } from "../context/RestaurantContext";

const AddRestaurantForm = () => {
  const { updateRestaurant } = useContext(RestaurantContext);

  const initialValues = { name: "", location: "", price_range: 0 };

  const onSubmit = async (values, action) => {
    action.setFieldValue("name", "");
    action.setFieldValue("location", "");
    action.setFieldValue("price_range", "");
    try {
      const { data } = await RestaurantFinder.post("/", values);
      updateRestaurant(data.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(props) => (
        <div className="mb-2">
          <form onSubmit={props.handleSubmit} className="form-group">
            <div className="form-group d-flex justify-content-around ">
              <div className="form-row">
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
              <div className="form-row">
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
              <div className="form-row">
                <div className="col">
                  <select
                    className="form-select"
                    aria-label="Select Price Range"
                    name="price_range"
                    value={props.values.price_range}
                    onChange={props.handleChange}
                  >
                    <option>Select Price Range</option>
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
                  <button type="submit" className="btn btn-md  btn-success">
                    Add Restaurant
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default AddRestaurantForm;
