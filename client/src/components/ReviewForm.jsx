import React, { useContext } from "react";
import { useParams } from "react-router";
import { Formik } from "formik";

import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantContext } from "../context/RestaurantContext";

const ReviewForm = () => {
  const { id } = useParams();

  const { selectedRestaurant, fetchRestaurant } = useContext(RestaurantContext);

  const initialValues = { name: "", review: "", rating: 1 };

  const onSubmit = async (values, action) => {
    try {
      await RestaurantFinder.post(`/review/${id}`, values);
      fetchRestaurant(id);
      // setSelectedRestaurant((prev) => ({
      //   data: [...prev.data],
      //   reviews: [...prev.reviews, data.data[0]],
      // }));

      action.setFieldValue("name", "");
      action.setFieldValue("review", "");
      action.setFieldValue("rating", 1);
    } catch (error) {
      console.error(error);
    }
  };

  console.log("review Form", selectedRestaurant);
  return (
    <div className="m-5">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(props) => (
          <div className="mb-2">
            <form onSubmit={props.handleSubmit}>
              <div className="row">
                <div className="form-group col-md-8">
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

                <div className="form-group col-md-4">
                  <select
                    className="form-select"
                    aria-label="Select Price Range"
                    name="rating"
                    value={props.values.rating}
                    onChange={props.handleChange}
                  >
                    <option defaultChecked value="1">
                      1
                    </option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col">
                  <textarea
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.review || ""}
                    name="review"
                    placeholder="Type..."
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col">
                  <button type="submit" className="btn btn-md  btn-success">
                    Submit Review
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default ReviewForm;
