import React, { useEffect, useState } from "react";
import Rafa from "../assets/rafa.png";
import { CheckCircleFill } from "@styled-icons/bootstrap/CheckCircleFill";
import { Box, Flex, Text, Grid, GridItem } from "@chakra-ui/react";

const Analytics = () => {
  const [isMobile, setIsMobile] = useState(false);
  const applyResponsive = () => {
    if (window.innerWidth <= 986) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    applyResponsive();
  }, []);

  window.addEventListener("resize", applyResponsive);
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
    <>
      <Box w="100%" bgColor="white" color="black" p="4">
        <Flex justify="center" id="services" pt="10" pb="10">
          <Box w={!isMobile && "60%"}>
            <Grid
              templateRows={isMobile && "1fr 1fr"}
              templateColumns={!isMobile && "1fr 1fr"}
              gap="10"
              w="100%"
            >
              <GridItem rowStart={isMobile && "2"}>
                <Box boxShadow="md">
                  <div
                    className="calendly-inline-widget w-[350px] h-[910px] md:w-[600px] h-[800px]"
                    data-url="https://calendly.com/devteksolutions/30min"
                  />
                </Box>
              </GridItem>
              <GridItem>
                <Flex direction="column">
                  <Box align={isMobile && "center"}>
                    <img
                      className="h-[150px] w-[150px] rounded-full border-solid border-2 border-teal-500"
                      src={Rafa}
                      alt="rafael"
                    ></img>
                  </Box>
                  <Box>
                    {" "}
                    <p className="text-[#00df9a] font-bold mt-5">
                      SCHEDULE YOUR CALL WITH RAFAEL
                    </p>
                  </Box>
                  <Box>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                      Free 15-Minute Demo Call
                    </h1>
                  </Box>
                  <Box w="90%">
                    <Text textAlign="justify">
                      By the end of this Audit call, you will have a clear
                      understanding of the next steps you can take for your
                      business to start generating consistent and reliable
                      results online with our website design services.<br></br>
                      <br></br>
                      Find a time on Rafael’s calendar to schedule your call
                      today and we will have our meeting soon!
                    </Text>
                  </Box>
                  <Box>
                    <p className="text-[#00df9a] mb-5 md:text-xl sm:text-2xl text-1xlfont-bold mt-5">
                      THIS BUSINESS CALL IS PERFECT FOR:
                    </p>
                  </Box>
                  <Box w="90%">
                    <Grid templateRows="repeat(4,1fr)" gap="5">
                      <GridItem>
                        <Grid
                          templateColumns={isMobile ? "0.1fr 1fr" : "0.050fr 1fr"}
                        >
                          <GridItem>
                            <div>
                              <CheckCircleFill size="15px" color="#00df9a" />
                            </div>
                          </GridItem>
                          <GridItem>
                            <div>
                              <p>
                                Business looking to take their offline business{" "}
                                <b>online</b>
                              </p>
                            </div>
                          </GridItem>
                        </Grid>
                      </GridItem>
                      <GridItem>
                        <Grid
                          templateColumns={isMobile ? "0.1fr 1fr" : "0.050fr 1fr"}
                        >
                          <GridItem>
                            <CheckCircleFill size="15px" color="#00df9a" />
                          </GridItem>
                          <GridItem>
                            <div>
                              <p>
                                ​Businesses looking to understand{" "}
                                <b>their increased revenue potential</b> with a
                                new website
                              </p>
                            </div>
                          </GridItem>
                        </Grid>
                      </GridItem>
                      <GridItem>
                        <Grid
                          templateColumns={isMobile ? "0.1fr 1fr" : "0.050fr 1fr"}
                        >
                          <GridItem>
                            <CheckCircleFill size="15px" color="#00df9a" />
                          </GridItem>
                          <GridItem>
                            <div>
                              <p>
                                Businesses looking for a reliable agency that
                                can make
                                <b> their company a priority.</b>
                              </p>
                            </div>
                          </GridItem>
                        </Grid>
                      </GridItem>
                      <GridItem>
                        <Grid
                          templateColumns={isMobile ? "0.1fr 1fr" : "0.050fr 1fr"}
                        >
                          <GridItem>
                            <CheckCircleFill size="15px" color="#00df9a" />
                          </GridItem>
                          <GridItem>
                            <div>
                              ​Businesses looking to{" "}
                              <b>maximize their conversion rates</b> & average
                              order value.
                            </div>
                          </GridItem>
                        </Grid>
                      </GridItem>
                    </Grid>
                  </Box>
                </Flex>
              </GridItem>
            </Grid>
          </Box>
        </Flex>
      </Box>
      {/* <div className="w-full bg-white py-10 px-4" id="services">
        <div className="grid grid-rows-2 gap-10 w-[350px] md:grid grid-cols-2 w-[1400px]  mx-auto">
           
            <div className="flex self-start">
              <div className="w-[100%] mx-auto grid gap-2 md:grid-cols-[1vw_25vw]">
      
                <div className="grid gap-y-3 md:grid-rows-4 ">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Analytics;
