const Transaction = require("../models/Transaction");

// @desc - get all transactions
// @route - GET /api/v1/transactions
// @access - Public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc - add new transaction
// @route - POST /api/v1/transactions
// @access - Public
exports.postTransaction = async (req, res, next) => {
  try {
    const { text, amount } = req.body;
    const transaction = await Transaction.create(req.body);
    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

// @desc - delete transaction
// @route - DELETE /api/v1/transaction/:id
// @access - Public
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: "No Transaction found",
      });
    }

    await transaction.remove();
    return res.status(201).json({
      success: true,
      data: "deleted",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "server error",
    });
  }
};
