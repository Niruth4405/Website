import React from "react";
import Double from "../assets/double.png";
import Single from "../assets/single.png";
import Triple from "../assets/triple.png";

function Cards() {
  return (
    <>
      <div className="md:flex justify-center gap-6 w-full bg-white py-[10rem] px-4 text-black">
        <div className="md:mt-20 cursor-pointer w-60 shadow-xl flex flex-col p-4 my-auto rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="single "
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-md">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 ">1 Granted User</p>
            <p className="py-2 border-b mx-8 ">Send up to 1 GB</p>
          </div>
          <button className="bg-green-500 w-[200px] mx-auto mt-2 rounded-lg py-2">
            Start Trial
          </button>
        </div>

        <div>
          <div className=" mt-20 cursor-pointer w-60 shadow-xl flex flex-col p-4 my-auto rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Double}
              alt="single "
            />
            <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
            <p className="text-center text-4xl font-bold">$200</p>
            <div className="text-center font-md">
              <p className="py-2 border-b mx-8 mt-8">750 GB Storage</p>
              <p className="py-2 border-b mx-8 ">6 Granted Users</p>
              <p className="py-2 border-b mx-8 ">Send up to 10 GB</p>
            </div>
            <button className="bg-green-500 w-[200px] mx-auto mt-2 rounded-lg py-2">
              Start Trial
            </button>
          </div>
        </div>
        <div>
          <div className="mt-20 cursor-pointer w-60 shadow-xl flex flex-col p-4 my-auto rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Single}
              alt="single "
            />
            <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
            <p className="text-center text-4xl font-bold">$249</p>
            <div className="text-center font-md">
              <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
              <p className="py-2 border-b mx-8 ">10 Granted Users</p>
              <p className="py-2 border-b mx-8 ">Send up to 25 GB</p>
            </div>
            <button className="bg-green-500 w-[200px] mx-auto mt-2 rounded-lg py-2">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
