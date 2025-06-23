import React from "react";

const servicesSection = () => {
  return (
    <section>
      <div className="flex flex-row w-[60vh] md:mx-[18vh] max-md:px-5 max-md:w-[98vw] h-auto max-md:mt-20 md:mt-[50vh]">
        <div className="flex flex-row gap-10 max-md:flex max-md:flex-col max-md:gap-2">
          <div className="md:h-[125vh] flex flex-col max-md:px-2 md:gap-[12vh]">
            <div>
              <h1 className="text-bold">How it Works!?</h1>
              <h3 className="text-2xl">
                it is about three easy & quick steps.
              </h3>
            </div>
            <div className="flex flex-col gap-5">
              <div className="md:px-[25vh] py-[30vh]   bg-gray-300"></div>
              <div className="flex flex-col text-center">
                <h1>TM</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
                  vel.
                </p>
              </div>
            </div>
          </div>
          <div className="md:h-[125vh] flex max-md:px-2 flex-col gap-5">
            <div className="md:px-[25vh] py-[30vh] mt-18  bg-gray-300"></div>
            <div className="flex flex-col text-center">
              <h1>TM</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
                vel.
              </p>
            </div>
          </div>
          <div className="md:h-[125vh] flex flex-col text-center gap-5 max-md:px-2">
            <div className="md:px-[25vh] py-[30vh] bg-gray-300"></div>
            <div className="flex flex-col text-center">
              <h1>TM</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
                vel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default servicesSection;
