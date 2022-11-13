
const express = require("express");
const registerController = require("../controllers/register");
const router = express.Router();

router.get("/register", registerController.Register);
router.post("/addUser", registerController.AddUser);

module.exports = router;
