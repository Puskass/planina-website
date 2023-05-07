import React from "react";

const Comment = ({ comment }) => {
  return (
    <li>
      <p>{comment.comment}</p>
    </li>
  );
};

export default Comment;
