
const express = require("express");
console.log("✅ routes/index.js LOADED");

const authRoutes = require("./auth.routes");

const router = express.Router();

const bankRoutes = require("./bank.routes");

router.get("/ping", (req, res) => {
  res.json({ message: "API routes are working" });
});

router.use("/auth", authRoutes);

router.use("/bank", bankRoutes);

router.use("/test", require("./test.routes"));

module.exports = router;
