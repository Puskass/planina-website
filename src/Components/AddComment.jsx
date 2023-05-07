import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import Button from "../shared/UIElemets/Button";

const AddCommentForm = ({ onCommentPost }) => {
  const [enteredComment, setEnteredComment] = useState("");
  
  const addCommentHandler = (e) => {
    e.preventDefault();
    const comment = {
      id: Math.random().toString(),
      text: enteredComment,
    };
    onCommentPost(comment);
    setEnteredComment("");
  };
  return (
    <form
      onSubmit={addCommentHandler}
      className="flex items-center justify-evenly"
    >
      <input
        onChange={(e) => setEnteredComment(e.target.value)}
        value={enteredComment}
        placeholder="Comment..."
        className="w-[80%] p-2 my-2 border rounded-md border-gray-400"
        type="text"
      ></input>

      <Button className={`hover:bg-purple-500`}>
        <FontAwesomeIcon icon={faTree} />
      </Button>
    </form>
  );
};

export default AddCommentForm;
