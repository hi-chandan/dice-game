import React from "react";

const Rule = () => {
  return (
    <div className=" p-10 flex flex-col justify-center items-center">
      <div className="bg-pink-200 ml-12 relative bottom-24 p-5">
        <h1 className="text-lg font-bold">How to play dice Game</h1>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          If selected number is equal to dice then you will get same point as
          dice if you get worng then 1 point will be dedcuted{" "}
        </p>
        <p className="font-bold">The Default number selected is 1</p>
      </div>
    </div>
  );
};

export default Rule;
