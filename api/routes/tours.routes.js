// Reqs
const express = require("express");
const router = express.Router();
const {
  getTours,
  getTour,
  postTour,
} = require("../controllers/tours.controllers");

router.post("/tour", postTour);
router.get("/tours", getTours);
router.get("/tours/:id", getTour);

module.exports = router;
