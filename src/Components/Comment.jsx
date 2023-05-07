import React from "react";

const Comment = ({ comment }) => {
  return <li>
    <p>
      {comment.text}
    </p>
  </li>;
};

export default Comment;
