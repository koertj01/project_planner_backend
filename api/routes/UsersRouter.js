const express = require('express');
const { getUsers, updateUser, deleteUser } = require ('../controllers/userController');
const router = express.Router();

router
.get("/", getUsers)
.post("/", addUser)
.patch("/:id", updateUser)
.delete("/:id", deleteUser)

module.exports = router;
