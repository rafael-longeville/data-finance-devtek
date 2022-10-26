import React from "react";
import {Box} from "@chakra-ui/react"

const Hero = () => {
  return (
    <div>
      <Box color="white">
        <div className="max-w-[1200px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold p-2">
            SUBCONTRACT OUR AGENCY TO DEVELOP YOUR WEBSITE
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            Grow your audience.
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
              With fast and flexible solutions for BTB, BTC and SASS companies
            </p>
          </div>
          <p className="md:text-2xl text-xl font-bold text-gray-500 mt-8">
            Increase the quality of your leads with Devtek Solutions
          </p>
          <button
            className="bg-[#00df9a] w-[200px] rounded-md font-medium mt-14 mx-auto py-3 text-black"
            onClick={() => {
              window.location.href = "#services";
            }}
          >
            Speak To Our Team Now
          </button>
        </div>
      </Box>
    </div>
  );
};

export default Hero;
