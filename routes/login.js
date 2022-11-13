const express = require("express");
const loginController = require("../controllers/login");
const router = express.Router();

router.get("/login", loginController.Login);
router.post("/loginToUser", loginController.LoginToUser);
router.get("/telaviv", loginController.FindTelAviv);
router.get("/batyam", loginController.FindBatYam);
router.get("/rishon", loginController.FindRishon);
router.get("/Logout", loginController.Logout);
router.get("/isConnect", loginController.IsConnect);

module.exports = router;
