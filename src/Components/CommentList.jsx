import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  const commentList = comments.map((comment) => (
    <Comment key={comment.id} comment={comment} />
  ));
  return <ul>{commentList}</ul>;
};

export default CommentList;
