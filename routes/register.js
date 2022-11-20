const { application } = require("express");
const express = require("express");
const registerController = require("../controllers/register");
const router = express.Router();

router.get("/register", registerController.register);
router.post("/addUser", registerController.addUser);

module.exports = router;
