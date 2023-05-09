import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import Button from "../shared/UIElemets/Button";
import axios from "axios";

const AddCommentForm = ({ onCommentPost }) => {
  const [enteredComment, setEnteredComment] = useState("");

  const addCommentHandler = async (e) => {
    e.preventDefault();
    const comment = {
      id: Math.random().toString(),
      comment: enteredComment,
    };
    await axios.post(`${process.env.REACT_APP_FIREBASE_URL}/comments.json`, {
      comment: enteredComment,
    });
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

      <Button type="submit" className={`hover:bg-purple-500`}>
        <FontAwesomeIcon icon={faTree} />
      </Button>
    </form>
  );
};

export default AddCommentForm;
