import React from "react";

const Comment = ({ comment }) => {
  return (
    <li className="py-2 max-w-lg">
      <p className="py-2 px-4 rounded-md border-2 overflow-auto">
        {comment.comment}
      </p>
    </li>
  );
};

export default Comment;
