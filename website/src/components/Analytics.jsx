import React from "react";
import Laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <>
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            className="w-[500px] mx-auto my-4"
            src={Laptop}
            alt="Animated image of a laptop"
          />
          <div className="flex flex-col justify-center text-black">
            <p className="text-green-500 font-bold">DATA ANALYTICS DASHBOARD</p>
            <h1 className="sm-text-4xl sm:text-3xl text-2xl font-bold py-2">
              Manage Data Analytics Centrally
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
              vero quas, earum impedit fugiat ipsum debitis dignissimos hic in
              harum quia magni ratione minima mollitia voluptate natus
              voluptatum unde maiores!
            </p>
            <button className="mt-2 py-2 rounded-xl font-bold text-lg bg-green-500 text-black px-[30px] sm:px-[40px] md:px-[50px] ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Analytics;
