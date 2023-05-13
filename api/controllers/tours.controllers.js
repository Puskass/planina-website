const Tour = require("../models/Tour");

exports.postTour = async (req, res) => {
  const {
    name,
    location,
    imgUrl,
    date,
    description,
    condition,
    technique,
    price,
    guideId,
  } = req.body;

  const tour = new Tour(
    name,
    location,
    imgUrl,
    date,
    description,
    condition,
    technique,
    price,
    guideId
  );
  const tourDoc = await tour.save();
  res.send(tourDoc);
};

exports.getTours = async (req, res) => {
  const toursDocs = await Tour.fetchAll();

  res.send(toursDocs);
};

exports.getTour = async (req, res) => {
  const { id } = req.params;

  const toursDoc = await Tour.findById(id);

  res.send(toursDoc);
};
