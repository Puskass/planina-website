// Reqs
const express = require("express");
const router = express.Router();
const { getTours, getTour } = require("../controllers/tours-controllers");

router.get("/tours", getTours);
router.get("/tour/:id", getTour);

module.exports = router;
