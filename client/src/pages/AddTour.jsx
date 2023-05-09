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
  const [location, setLocation] = useState("");

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
      location: location,
    });

    history.push("/tours");
    setEnteredImageURL("");
    setEnteredName("");
    setEnteredDate("");
    setEnteredDescription("");
    setEnteredCond("");
    setEnteredTech("");
    setEnteredPrice("");
    setLocation("");
  };

  const handleChange = (e) => {
    const min = 1;
    const max = 100000;
    const value = Math.max(min, Math.min(max, Number(e.target.value)));
    setEnteredPrice(value);
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
        required
        placeholder="Tour URL Image "
        type="url"
        className="p-2 my-2 border rounded-md border-gray-400"
      />
      <div className="flex justify-around">
        <input
          onChange={(e) => setEnteredName(e.target.value)}
          value={enteredName}
          required
          maxLength={30}
          placeholder="Tour Name"
          type="text"
          className="p-2 my-2 border w-[50%] mr-4 rounded-md border-gray-400"
        />
        <input
          onChange={(e) => setEnteredDate(e.target.value)}
          value={enteredDate}
          required
          placeholder="Tour Date"
          type="date"
          className="p-2 my-2 border w-[50%] rounded-md border-gray-400"
        />
      </div>
      <textarea
        onChange={(e) => setEnteredDescription(e.target.value)}
        value={enteredDescription}
        required
        maxLength={300}
        placeholder="Description of the Tour"
        className="p-2 my-2 h-[6rem] border rounded-md border-gray-400 overflow-auto "
      ></textarea>

      {/* FITNESS and CONDITION field */}
      <div className="flex justify-around">
        <select
          onChange={(e) => setEnteredCond(e.target.value)}
          value={enteredCond}
          required
          type="text"
          defaultValue="Fitness requirement"
          className="text-gray-400 p-2 my-2 border w-[50%] mr-4 border-gray-400"
        >
          <option selected hidden>
            Fitness requirement
          </option>
          <option value="K1">K1</option>
          <option value="K2">K2</option>
          <option value="K3">K3</option>
          <option value="K4">K4</option>
        </select>
        <select
          onChange={(e) => setEnteredTech(e.target.value)}
          value={enteredTech}
          required
          type="text"
          className="text-gray-400 p-2 my-2 border w-[50%] border-gray-400"
        >
          <option selected hidden>
            Technical requirement
          </option>
          <option value="T1">T1</option>
          <option value="T2">T2</option>
          <option value="T3">T3</option>
          <option value="T4">T4</option>
        </select>
      </div>
      <select className="p-2 my-2 border text-gray-400 border-gray-400">
        {/* <option value="" disabled selected hidden>
          Select Guide
        </option> */}
        {/* Treba se napraviti GET request firebasu i loopat krot već zadane vodiče */}
        <option>Emin</option>
      </select>
      {/* PRICE and LOCATION */}
      <div className="flex">
        <input
          onChange={handleChange}
          value={enteredPrice}
          required
          placeholder="Price in $"
          type="number"
          className="p-2 my-2 border w-[50%] rounded-md border-gray-400"
        />
        <input
          type="text"
          placeholder="Nearest City to your Destination"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          required
          className="p-2 my-2 border w-[50%] ml-4 rounded-md border-gray-400"
        />
      </div>

      <div className="flex justify-center my-2 ">
        <Button type="submit">Add tour</Button>
      </div>
    </form>
  );
};

export default AddTour;
