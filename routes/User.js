const express = require("express");
const router = express.Router();
const AuthController = require("../controller/userProfileApi");

router.post("/register", AuthController.register);
router.get("/login", AuthController.login);
router.get("/getuser", AuthController.allUser);

module.exports = router;
