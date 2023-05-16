import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return (
    <ul className="max-w-lg">
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </ul>
  );
};

export default CommentList;
