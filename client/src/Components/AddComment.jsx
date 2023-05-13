import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import Button from "../shared/UIElemets/Button";
import axios from "axios";
import { useParams } from "react-router-dom";

const AddCommentForm = ({ onCommentPost }) => {
  const [enteredComment, setEnteredComment] = useState("");
  const params = useParams();

  const addCommentHandler = async (e) => {
    e.preventDefault();
    const comment = {
      id: Math.random().toString(),
      comment: enteredComment,
    };
    await axios.post(`http://localhost:5000/tours/${params.id}/comment`, {
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
        required
        maxLength={50}
        autoComplete="off"
        type="text"
        placeholder="Comment..."
        className="w-[80%] p-2 my-2 border rounded-md border-gray-400"
      ></input>

      <Button type="submit" className={`hover:bg-purple-500`}>
        <FontAwesomeIcon icon={faTree} />
      </Button>
    </form>
  );
};

export default AddCommentForm;
