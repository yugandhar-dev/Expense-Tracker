const router = require("express").Router();
const {
  getTransactions,
  postTransaction,
  deleteTransaction,
} = require("../controllers/transactions");

router.route("/").get(getTransactions).post(postTransaction);

router.route("/:id").delete(deleteTransaction);

module.exports = router;
