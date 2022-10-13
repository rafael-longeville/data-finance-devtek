import React, { useEffect } from "react";
import Rafa from "../assets/rafa.png";
import { CheckCircleFill } from "@styled-icons/bootstrap/CheckCircleFill";

const Analytics = () => {
  <script
    type="text/javascript"
    src="https://assets.calendly.com/assets/external/widget.js"
    async
  ></script>;
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  });
  return (
    <div className="w-full bg-white py-10 px-4" id="services">
      <div className="max-w-[1400px] mx-auto grid gap-10 md:grid-cols-2">
        <div>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/devteksolutions/30min"
            style={{ minWidth: "320px", height: "1000px" }}
          />
        </div>
        <div className="flex flex-col mt-16">
          <img
            className="h-[150px] w-[150px] rounded-full border-solid border-2 border-teal-500"
            src={Rafa}
            alt="rafael"
          ></img>
          <p className="text-[#00df9a] font-bold mt-5">
            SCHEDULE YOUR CALL WITH RAFAEL
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Free 15-Minute Demo Call
          </h1>
          <h2 className="mt-3 md:text-xl sm:text-2xl text-1xl w-[500px]">
            By the end of this Audit call, you will have a clear understanding
            of the next steps you can take for your business to start generating
            consistent and reliable results online with our website design
            services.<br></br>
            <br></br>
            Find a time on Rafael’s calendar to schedule your call today and we
            will have our meeting soon!
          </h2>
          <br></br>
          <p className="text-[#00df9a] mb-5 md:text-xl sm:text-2xl text-1xlfont-bold mt-5">
            THIS BUSINESS CALL IS PERFECT FOR:
          </p>
          <div className="flex self-start">
            <div className="w-[100%] mx-auto grid gap-2 md:grid-cols-[1vw_25vw]">
              <div className="grid gap-y-3 md:grid-rows-4 ">
                <div>
                  <CheckCircleFill size="15px" color="#00df9a" />
                </div>
                <div>
                  <CheckCircleFill size="15px" color="#00df9a" />
                </div>
                <div>
                  <CheckCircleFill size="15px" color="#00df9a" />
                </div>
                <div>
                  <CheckCircleFill size="15px" color="#00df9a" />
                </div>
                
              </div>
              <div className="grid gap-y-3 md:grid-rows-4 ">
                <div>
                  <p>
                    Business looking to take their offline business{" "}
                    <b>online</b>
                  </p>
                </div>
                <div>
                  <p>
                    ​Businesses looking to understand{" "}
                    <b>their increased revenue potential</b> with a new website
                  </p>
                </div>
                <div>
                  <p>
                    Businesses looking for a reliable agency that can make
                    <b> their company a priority.</b>
                  </p>
                </div>
                
                <div>​Businesses looking to <b>maximize their conversion rates</b> & average order value.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
