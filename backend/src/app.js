const express = require("express");
const cors = require("cors");

console.log("✅ app.js LOADED");

const app = express();

// Global middlewares
app.use(cors());
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.json({ message: "Bank Management System API is running" });
});

const routes = require("./routes/index");

app.use("/api", routes);


module.exports = app;

