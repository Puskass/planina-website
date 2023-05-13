const Comment = require("../models/Comment");

exports.postComment = async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;

  const createdComment = new Comment(comment, id);
  const commentDoc = await createdComment.save();
  res.send(commentDoc);
};

exports.getComments = async (req, res) => {
  const { id: tourId } = req.params;

  const commentDocs = await Comment.fetchAll(tourId);

  res.send(commentDocs);
};
