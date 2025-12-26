const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const { protectedTest } = require("../controllers/test.controller");

const router = express.Router();

router.get("/protected", authMiddleware, protectedTest);

module.exports = router;
