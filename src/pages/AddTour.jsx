import React, { useState } from "react";
import axios from "axios";
import Button from "../shared/UIElemets/Button";
import { useHistory } from "react-router-dom";

const AddTour = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredImageURL, setEnteredImageURL] = useState("");
  const [enteredCond, setEnteredCond] = useState("");
  const [enteredTech, setEnteredTech] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const history = useHistory();

  const submitTourHandler = async (e) => {
    e.preventDefault();

    await axios.post(`${process.env.REACT_APP_FIREBASE_URL}/tours.json`, {
      imageURL: enteredImageURL,
      name: enteredName,
      description: enteredDescription,
      date: enteredDate,
      condition: enteredCond,
      technique: enteredTech,
      price: enteredPrice,
    });

    history.push("/tours");
    setEnteredImageURL("");
    setEnteredName("");
    setEnteredDate("");
    setEnteredDescription("");
    setEnteredCond("");
    setEnteredTech("");
    setEnteredPrice("");

  };

  return (
    <form
      onSubmit={submitTourHandler}
      className="flex flex-col max-w-lg m-auto pt-[6rem] "
    >
      <h1 className="font-semibold mb-3 text-2xl">Add a tour:</h1>

      <input
        onChange={(e) => setEnteredImageURL(e.target.value)}
        value={enteredImageURL}
        placeholder="Unesi URL slike"
        type="url"
        className="p-2 my-2 border rounded-md border-gray-400"
      />
      <div className="flex justify-around">
        <input
          onChange={(e) => setEnteredName(e.target.value)}
          value={enteredName}
          placeholder="Naziv ture"
          type="text"
          className="p-2 my-2 border w-[50%] mr-4 rounded-md border-gray-400"
        />
        <input
          onChange={(e) => setEnteredDate(e.target.value)}
          value={enteredDate}
          placeholder="Datum ture"
          type="date"
          className="p-2 my-2 border w-[50%] rounded-md border-gray-400"
        />
 
      </div>
      <textarea
        onChange={(e) => setEnteredDescription(e.target.value)}
        value={enteredDescription}
        placeholder="Opis ture"
        className="p-2 my-2 h-[6rem] border rounded-md border-gray-400 overflow-auto "
      ></textarea>
      <div className="flex justify-around">
        <select
          onChange={(e) => setEnteredCond(e.target.value)}
          defaultValue={enteredCond}
          type="text"
          className="text-gray-400 p-2 my-2 border w-[50%] mr-4 border-gray-400"
        >
          <option value="" disabled selected hidden>
            Kondiciona zahtjevnost
          </option>
          <option>K1</option>
          <option>K2</option>
          <option>K3</option>
          <option>K4</option>
        </select>
        <select
          onChange={(e) => setEnteredTech(e.target.value)}
          value={enteredTech}
          placeholder="Tehnička zahtjevnost"
          type="text"
          className="text-gray-400 p-2 my-2 border  w-[50%] border-gray-400"
        >
          <option value="" disabled selected hidden>
            Tehnička zahtjevnost
          </option>
          <option>T1</option>
          <option>T2</option>
          <option>T3</option>
          <option>T4</option>
        </select>
      </div>
      <select className="p-2 my-2 border text-gray-400 border-gray-400">
        <option value="" disabled selected hidden>
          Odaber vodiča
        </option>
        {/* Treba se napraviti GET request firebasu i loopat krot već zadane vodiče */}
        <option>Emin</option>
      </select>
      <input
        onChange={(e) => setEnteredPrice(e.target.value)}
        value={enteredPrice}
        placeholder="Unesi cijenu"
        type="text"
        className="p-2 my-2 border rounded-md border-gray-400"
      />
      <div className="flex justify-center my-2 ">
        <Button type="submit">Add tour</Button>
      </div>
    </form>
  );
};

export default AddTour;
