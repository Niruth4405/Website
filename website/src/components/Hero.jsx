import React from "react";
import {ReactTyped} from "react-typed";

function Hero() {
  return (
    <>
      <div>
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center text-white py-5 md:py-[200px]">
          <p className="text-center uppercase text-green-500 text-md p-2 font-bold md:text-xl">
            Growing with Data Analytics
          </p>
          <h1 className="text-center font-bold text-5xl md:text-7xl py-2">
            Grow with Data
          </h1>
          <div className='flex justify-center items-center'>
            <p className='font-bold sm:text-4xl md:text-5xl text-xl py-2'>Fast &  flexible financing for </p>
            <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold pl-2' strings={['BTB','BTC','SaAs']} typeSpeed={120} backSpeed={140} loop/>
          </div>
          <p className="text-center text-lg text-gray-400 font-bold py-2">
            Monitor your data analytics to increase revenue for BTB,BTC & SaAS
            platforms.
          </p>
          
          <button className='mt-2 py-2 rounded-xl font-bold text-lg bg-green-500 text-black px-[70px] sm:px-[85px] md:px-[100px] '>Get Started</button>
        </div>
      </div>
    </>
  );
}

export default Hero;
