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
      <textarea
        onChange={(e) => setEnteredComment(e.target.value)}
        value={enteredComment}
        required
        maxLength={70}
        autoComplete="off"
        type="text"
        placeholder="Comment..."
        className="p-2 my-2 h-[3rem] w-screen border rounded-md border-gray-400 overflow-auto "
      ></textarea>

      <Button type="submit">
        <FontAwesomeIcon icon={faTree} />
      </Button>
    </form>
  );
};

export default AddCommentForm;
