const express = require("express");
const router = express.Router();
const PostController = require("../controller/PostApi");

router.get("/all", PostController.allposts);
router.post("/newpost", PostController.newPost);
module.exports = router;
