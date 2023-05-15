import React from "react";
import Button from "../shared/UIElemets/Button";
import { Link } from "react-router-dom";

const ErrorMessage = () => {
  return (
    <div className="w-[30%] mx-auto">
      <h1 className="text-3xl text-center py-6">
        There are currently no tours
      </h1>
      <div className="text-center">
        <Link to="/add-tour">
          <Button>Please Enter a Tour</Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorMessage;
