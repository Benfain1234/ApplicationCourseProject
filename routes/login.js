const { application } = require("express");
const express = require("express");
const loginController = require("../controllers/login");
const router = express.Router();

router.get("/login", loginController.login);
router.post("/loginToUser", loginController.loginToUser);
router.get("/telaviv", loginController.findtelaviv);
router.get("/batyam", loginController.findbatyam);
router.get("/rishon", loginController.findrishon);
router.get("/Logout", loginController.Logout);
router.get("/isConnect", loginController.isConnect);

module.exports = router;
