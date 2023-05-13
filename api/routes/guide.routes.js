// Reqs
const express = require("express");
const router = express.Router();

const {
  postGuide,
  getGuide,
  getGuides,
} = require("../controllers/guides.controllers");

router.post("/guide", postGuide);
router.get("/guides", getGuides);
router.get("/guides/:id", getGuide);

module.exports = router;
