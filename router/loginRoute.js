const express = require("express");
const router = express.Router();

const loginController = require("../controller/loginController");

router.get("/",loginController.login)
router.post("/",loginController.requestLogin)

module.exports = router;