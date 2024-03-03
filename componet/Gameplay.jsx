import React, { useState } from "react";
import Roledice from "./Roledice";
import Rule from "./Rule";

const Gameplay = () => {
  const array = [1, 2, 3, 4, 5, 6];
  const [score, setscore] = useState(0);
  const [seletedNumber, setSelectedNumber] = useState(1);
  const [showrule, setshowrule] = useState(false);
  const [currentDice, setcurrentDict] = useState(1);
  const generateRandam = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  console.log(showrule);
  const RoleDice = () => {
    if (!seletedNumber) return;
    const randomnumber = generateRandam(1, 7);
    setcurrentDict((prev) => randomnumber);

    if (seletedNumber === randomnumber) {
      setscore((prev) => prev + randomnumber);
    } else {
      setscore((prev) => prev - 1);
    }
    setSelectedNumber(1);
  };
  const roolrule = () => {
    setshowrule(!showrule);
  };

  const resetscore = () => {
    setscore(0);
  };

  return (
    <section className="">
      <div className="p-8  w-2/12 flex flex-col justify-center items-center">
        <h1 className="text-8xl font-bold">{score}</h1>
        <p className="font-bold">Total Score</p>
      </div>
      <div className="flex ">
        <div className=" sm:w-3/12 w-4/12 grid justify-end p-3 space-y-4 ">
          {seletedNumber ? (
            ""
          ) : (
            <p className="text-red-800">please select any number</p>
          )}
          <h1 className="font-bold ">Select Number</h1>
          {array.map((value, i) => (
            <button
              className={`border-2 border-black p-2  h-14 w-14 font-bold text-lg ${
                seletedNumber == value
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }
        `}
              onClick={() => setSelectedNumber(value)}
              disabled={seletedNumber == value}
            >
              {value}
            </button>
          ))}
        </div>

        <Roledice
          RoleDice={RoleDice}
          resetscore={resetscore}
          currentDice={currentDice}
          roolrule={roolrule}
        />
      </div>
      {showrule ? <Rule /> : ""}
    </section>
  );
};

export default Gameplay;
