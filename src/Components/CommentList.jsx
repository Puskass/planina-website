import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ul>
  );
};

export default CommentList;
