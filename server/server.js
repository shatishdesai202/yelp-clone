require("dotenv").config();

const express = require("express");
const app = express();

const morgan = require("morgan");
const cors = require("cors");
// const { query } = require("./db");
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const port = process.env.PORT || 12314;

const routes = require("./routes");

app.use("/api/v1", routes);

// Get All Restaurants
// app.get("/api/v1/restaurant", async (req, res) => {
//   try {
//     const { rows } = await query("SELECT * FROM restaurant");
//     res.status(200).json({
//       data: rows,
//     });
//   } catch (error) {
//     res.status(404).json({
//       data: error,
//     });
//   }
// });

// // Get Specific Restaurant
// app.get("/api/v1/restaurant/:id", async (req, res) => {
//   try {
//     const { rows } = await query("SELECT * FROM restaurant WHERE id=$1", [
//       req.params.id,
//     ]); // param write quert -- "It's avoid to SQL INJECT"
//     res.status(200).json({
//       data: rows,
//     });
//   } catch (error) {
//     res.status(404).json({
//       data: error,
//     });
//   }
// });

// app.post("/api/v1/restaurant", async (req, res) => {
//   try {
//     const { rows } = await query(
//       "INSERT INTO restaurant(name,location,price_range) VALUES ($1,$2,$3) returning *",
//       [req.body.name, req.body.location, req.body.price_range]
//     );
//     res.status(200).json({
//       data: rows,
//     });
//   } catch (error) {
//     res.status(404).json({
//       data: error,
//     });
//   }
// });

// app.put("/api/v1/restaurant/:id", async (req, res) => {
//   try {
//     const { rows } = await query(
//       "UPDATE restaurant SET name = $1,location = $2 ,price_range= $3 WHERE id=$4 returning *",
//       [req.body.name, req.body.location, req.body.price_range, req.params.id]
//     );
//     res.status(200).json({
//       data: rows,
//     });
//   } catch (error) {
//     res.status(404).json({
//       data: error,
//     });
//   }
// });

// app.delete("/api/v1/restaurant/:id", async (req, res) => {
//   try {
//     const { rows } = await query(
//       "DELETE FROM restaurant WHERE id=$1 returning *",
//       [req.params.id]
//     );
//     res.status(200).json({
//       data: rows,
//     });
//   } catch (error) {
//     res.status(404).json({
//       data: error,
//     });
//   }
// });

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
