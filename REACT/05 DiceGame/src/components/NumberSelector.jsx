import React from "react";
import { useState } from "react";

const NumberItem = ({ number, onClick }) => (
  <h1
    className="flex flex-row justify-center items-center w-12 h-12 border-2 border-black rounded-md cursor-pointer gap-4 "
    onClick={onClick}
  >
    {number}
  </h1>
);

const NumberSelector = () => {
  const numbers = [1, 2, 3, 4, 5, 6];

  const [selectedNumber, setSelectedNumber] = useState();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center ">
        <div className="flex flex-row gap-4">
          {numbers.map((value) => (
            <NumberItem
              key={value}
              number={value}
              onClick={() => setSelectedNumber(value)}
            />
          ))}
        </div>
      </div>
      <div>
        <p className="text-lg font-semibold  ">
          Selected Number: {selectedNumber}
        </p>
        <p className="text-lg font-semibold">Select Number</p>
      </div>
    </div>
  );
};

export default NumberSelector;
