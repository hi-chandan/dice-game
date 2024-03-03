import React from "react";

const Startgame = ({ toggle }) => {
  return (
    <section className=" h-screen flex justify-center items-center">
      <div className="flex gap-20 max-sm:flex-col justify-center items-center">
        <div className="">
          <img src="images/dices.png" alt="" />
        </div>
        <div className="space-y-6 max-sm:w-full p-4 ">
          <h1 className="text-6xl font-bold">DICE GAME</h1>
          <button
            className="float-right bg-black text-white p-2 w-40 rounded-md"
            onClick={toggle}
          >
            START GAME
          </button>
        </div>
      </div>
    </section>
  );
};

export default Startgame;
