import React, { useState } from "react";

const Roledice = ({ RoleDice, currentDice, resetscore, roolrule }) => {
  return (
    <div className="flex flex-col justify-start items-center  w-full ">
      <div className="" onClick={RoleDice}>
        <img
          src={`/images/dice/dice_${currentDice}.png`}
          alt=""
          className=" "
        />
      </div>
      <div className="flex flex-col w-52 gap-5">
        <p className="text-lg text-center font-bold">Click on Dice to Roll</p>
        <button
          onClick={resetscore}
          className="p-2 rounded-lg border-2 border-black "
        >
          Reset Score
        </button>
        <button
          onClick={roolrule}
          className="bg-black text-white p-2 rounded-lg"
        >
          Show Rules
        </button>
      </div>
    </div>
  );
};

export default Roledice;
