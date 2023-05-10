const Guide = require("../models/Guide");

exports.postGuide = async (req, res) => {
  const { name, imgUrl, description } = req.body;

  const guide = new Guide(name, imgUrl, description);
  const guideDoc = await guide.save();
  res.send(guideDoc);
};

exports.getGuides = async (req, res) => {
  const guideDocs = await Guide.fetchAll();

  res.send(guideDocs);
};

exports.getGuide = async (req, res) => {
  const { id } = req.params;

  const guideDoc = await Guide.findById(id);

  res.send(guideDoc);
};
