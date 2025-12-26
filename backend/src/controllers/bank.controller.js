const Transaction = require("../models/Transaction.model");
const User = require("../models/User.model");

// Get current balance
exports.getBalance = async (req, res) => {
  try {
    res.json({
      accountNumber: req.user.accountNumber,
      balance: req.user.balance,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch balance" });
  }
};

// Deposit money
exports.deposit = async (req, res) => {
  try {
    const { amount, description } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid deposit amount" });
    }

    req.user.balance += amount;
    await req.user.save();

    await Transaction.create({
      user: req.user._id,
      type: "deposit",
      amount,
      description,
    });

    res.json({
      message: "Deposit successful",
      balance: req.user.balance,
    });
  } catch (error) {
    res.status(500).json({ message: "Deposit failed" });
  }
};

// Withdraw money
exports.withdraw = async (req, res) => {
  try {
    const { amount, description } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid withdrawal amount" });
    }

    if (amount > req.user.balance) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    req.user.balance -= amount;
    await req.user.save();

    await Transaction.create({
      user: req.user._id,
      type: "withdraw",
      amount,
      description,
    });

    res.json({
      message: "Withdrawal successful",
      balance: req.user.balance,
    });
  } catch (error) {
    res.status(500).json({ message: "Withdrawal failed" });
  }
};

//Transaction History
exports.getTransactionHistory = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      user: req.user._id
    }).sort({ createdAt: -1 });

    res.json({
      count: transactions.length,
      transactions
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch transactions" });
  }
};