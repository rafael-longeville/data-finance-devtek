import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import { Box } from "@chakra-ui/react";

const Cards = () => {
  return (
    <>
      <div className="w-full py-[10rem] px-4 bg-white" id="cards">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Single}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              Product example
            </h2>
            <p className="text-center text-4xl font-bold">$49</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">50 GB Storage</p>
              <p className="py-2 border-b mx-8">1 Granted User</p>
              <p className="py-2 border-b mx-8">Send up to 2 GB</p>
            </div>
            <button
              onClick={() => {
                window.location.href = "#services";
              }}
              className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
            >
              Buy now
            </button>
          </div>
          <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-transparent"
              src={Double}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              Product example 2
            </h2>
            <p className="text-center text-4xl font-bold">$199</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
              <p className="py-2 border-b mx-8">100 Granted User</p>
              <p className="py-2 border-b mx-8">Send up to 200 GB</p>
            </div>
            <button
              onClick={() => {
                window.location.href = "#services";
              }}
              className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
            >
              Buy now
            </button>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Triple}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              Product example 3
            </h2>
            <p className="text-center text-4xl font-bold">$499</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
              <p className="py-2 border-b mx-8">1000 Granted User</p>
              <p className="py-2 border-b mx-8">Send up to 2 TB</p>
            </div>
            <button
              onClick={() => {
                window.location.href = "#services";
              }}
              className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
