import React, { useState } from "react";
import axios from "axios";
import Button from "../shared/UIElemets/Button";
import { useHistory } from "react-router-dom";

const AddTour = () => {
  const [formValues, setFormValues] = useState({
    imgUrl: "",
    name: "",
    description: "",
    date: "",
    condition: "",
    technique: "",
    price: "",
    location: "",
  });

  const history = useHistory();
  // Unused function
  // const handleChange = (e) => {
  //   const min = 1;
  //   const max = 100000;
  //   const value = Math.max(min, Math.min(max, Number(e.target.value)));
  //   setFormValues({ ...formValues, price: value });
  // };

  const submitTourHandler = async (e) => {
    e.preventDefault();

    await axios.post(`http://localhost:5000/tour`, formValues);

    history.push("/tours");
    setFormValues({
      imgUrl: "",
      name: "",
      description: "",
      date: "",
      condition: "",
      technique: "",
      price: "",
      location: "",
    });
  };

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={submitTourHandler}
      className="flex flex-col max-w-lg m-auto pt-[6rem] "
    >
      <h1 className="font-semibold mb-3 text-2xl">Add a tour:</h1>

      <input
        onChange={handleInputChange}
        value={formValues.imgUrl}
        name="imgUrl"
        required
        placeholder="Tour URL Image "
        type="text"
        className="p-2 my-2 border rounded-md border-gray-400"
      />
      <div className="flex justify-around">
        <input
          onChange={handleInputChange}
          value={formValues.name}
          name="name"
          required
          maxLength={30}
          placeholder="Tour Name"
          type="text"
          className="p-2 my-2 border w-[50%] mr-4 rounded-md border-gray-400"
        />
        <input
          onChange={handleInputChange}
          value={formValues.date}
          name="date"
          required
          placeholder="Tour Date"
          type="date"
          className="p-2 my-2 border w-[50%] rounded-md border-gray-400"
        />
      </div>
      <textarea
        onChange={handleInputChange}
        value={formValues.description}
        name="description"
        required
        maxLength={300}
        placeholder="Description of the Tour"
        className="p-2 my-2 h-[6rem] border rounded-md border-gray-400 overflow-auto "
      ></textarea>

      {/* FITNESS and CONDITION field */}
      <div className="flex justify-around">
        <select
          onChange={handleInputChange}
          value={formValues.condition}
          name="condition"
          required
          type="text"
          className="text-gray-400 p-2 my-2 border w-[50%] mr-4 border-gray-400"
        >
          <option defaultValue hidden>
            Fitness requirement
          </option>
          <option value="K1">K1</option>
          <option value="K2">K2</option>
          <option value="K3">K3</option>
          <option value="K4">K4</option>
        </select>
        <select
          onChange={handleInputChange}
          value={formValues.technique}
          name="technique"
          required
          type="text"
          className="text-gray-400 p-2 my-2 border w-[50%] border-gray-400"
        >
          <option defaultValue hidden>
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
          onChange={handleInputChange}
          value={formValues.price}
          name="price"
          required
          placeholder="Price in $"
          type="number"
          className="p-2 my-2 border w-[50%] rounded-md border-gray-400"
        />
        <input
          type="text"
          placeholder="Nearest City to your Destination"
          onChange={handleInputChange}
          value={formValues.location}
          name="location"
          required
          maxLength={30}
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
