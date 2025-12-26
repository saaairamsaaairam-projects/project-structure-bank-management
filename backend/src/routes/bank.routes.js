const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const {
  getBalance,
  deposit,
  withdraw,
  getTransactionHistory
} = require("../controllers/bank.controller");

const router = express.Router();

// All routes below are protected
router.get("/balance", authMiddleware, getBalance);
router.post("/deposit", authMiddleware, deposit);
router.post("/withdraw", authMiddleware, withdraw);
router.get("/transactions", authMiddleware, getTransactionHistory);

module.exports = router;

