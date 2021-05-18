const express = require("express");

const router = express.Router();

const { query } = require("../db");

// Get All Restaurants
router.get("/restaurant", async (req, res) => {
  try {
    // const { rows } = await query("SELECT * FROM restaurant");
    const { rows } = await query(
      "select * from restaurant left join(select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurant.id = reviews.restaurant_id;"
    );
    res.status(200).json({
      data: rows,
    });
  } catch (error) {
    res.status(404).json({
      data: error,
    });
  }
});

// Get Specific Restaurant
router.get("/restaurant/:id", async (req, res) => {
  try {
    // const { rows } = await query("SELECT * FROM restaurant WHERE id=$1", [
    //   req.params.id,
    // ]); // param write quert -- "It's avoid to SQL INJECT"

    const { rows } = await query(
      "select * from restaurant left join(select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurant.id = reviews.restaurant_id where id = $1;",
      [req.params.id]
    ); // param write quert -- "It's avoid to SQL INJECT"

    const reviews = await query(
      "SELECT * FROM reviews WHERE restaurant_id=$1",
      [req.params.id]
    );

    res.status(200).json({
      data: rows,
      reviews: reviews.rows,
    });
  } catch (error) {
    res.status(404).json({
      data: error,
    });
  }
});

router.post("/restaurant", async (req, res) => {
  try {
    const { rows } = await query(
      "INSERT INTO restaurant(name,location,price_range) VALUES ($1,$2,$3) returning *",
      [req.body.name, req.body.location, req.body.price_range]
    );
    res.status(200).json({
      data: rows,
    });
  } catch (error) {
    res.status(404).json({
      data: error,
    });
  }
});

router.put("/restaurant/:id", async (req, res) => {
  try {
    const { rows } = await query(
      "UPDATE restaurant SET name = $1,location = $2 ,price_range= $3 WHERE id=$4 returning *",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );
    res.status(200).json({
      data: rows,
    });
  } catch (error) {
    res.status(404).json({
      data: error,
    });
  }
});

router.delete("/restaurant/:id", async (req, res) => {
  try {
    const { rows } = await query(
      "DELETE FROM restaurant WHERE id=$1 returning *",
      [req.params.id]
    );
    res.status(200).json({
      data: rows,
    });
  } catch (error) {
    res.status(404).json({
      data: error,
    });
  }
});

router.post("/restaurant/review/:id", async (req, res) => {
  try {
    const { rows } = await query(
      "INSERT INTO reviews(restaurant_id, name, review, rating) VALUES ($1,$2,$3,$4) returning *",
      [req.params.id, req.body.name, req.body.review, req.body.rating]
    );
    res.status(200).json({
      data: rows,
    });
  } catch (error) {
    res.status(404).json({
      data: error,
    });
  }
});

router.delete("/restaurant/review/delete/:id", async (req, res) => {
  try {
    const { rows } = await query(
      "DELETE FROM reviews WHERE id=$1 returning *",
      [req.params.id]
    );
    res.status(200).json({
      data: rows,
    });
  } catch (error) {
    res.status(404).json({
      data: error,
    });
  }
});

module.exports = router;
