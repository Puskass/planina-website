// Reqs
const express = require("express");
const router = express.Router();
const { getTours } = require("../controllers/tours-controllers");

router.get("/tours", getTours);

module.exports = router;
