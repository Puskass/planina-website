// Requirements
const express = require("express");
const router = express.Router();
const { getComments, postComment } = require("../controllers/comments.controllers");

router.post("/tours/:id/comment", postComment);
router.get("/tours/:id/comments", getComments);

module.exports = router;