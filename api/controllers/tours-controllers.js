// Reqs
const express = require("express");
const Tour = require("../models/Tour");
const Guide = require("../models/Guide");

exports.getTours = async (request, response) => {
  const tours = await Tour.fetchAll();

  response.send(tours);
};

exports.getTour = async (request, response) => {
  const { id } = request.params;

  const tour = await Tour.findById(id);

  response.send(tour);
};