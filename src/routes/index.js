const express = require("express");
const router = express.Router();

const {
  addUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

const {
  addTransaction,
  getTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transaction");

router.post("/users", addUser);
router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

router.post("/transactions", addTransaction);
router.get("/transactions/:id", getTransaction);
router.get("/transactions", getTransactions);
router.put("/transactions/:id", updateTransaction);
router.delete("/transactions/:id", deleteTransaction);

module.exports = router;
