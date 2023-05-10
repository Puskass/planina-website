// Reqs
const express = require("express");
const Tour = require("../models/Tour");
const Guide = require("../models/Guide");

exports.postTour = async (req, res) => {
  const {
    name,
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
