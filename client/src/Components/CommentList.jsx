import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment) => (
        <Comment key={comment.comment} comment={comment} />
      ))}
    </ul>
  );
};

export default CommentList;
