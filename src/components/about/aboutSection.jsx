import React from "react";

const aboutSection = () => {
  return (
    <section>
      <div className="md:mx-[5vh] md:my-[5vh] max-md:w-[98vw]">
        <div className="flex gap-5 flex-row max-md:flex-col max-md:gap-3 max-md:w-[98vw]">
          <div className="md:px-[49vh] py-[30vh] max-md:w-[98vw]  bg-gray-200 relative ">
            <div className="absolute bottom-[-8vh] right-0 max-md:w-[98vw] bg-white p-4 md:w-[85vh]">
                <div className="flex flex-row gap-4">
                    <h1 className="text-3xl">TM</h1>
              <h1 className=" text-2xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor .
              </h1>

              </div>
              <p >
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                vel accusamus minima quia nulla ipsum dolorum aliquam aut, quos
                corrupti?{" "}
              </p>
            </div>
          </div>
          <div className="md:px-[49vh] py-[30vh] max-md:mt-10 mr-0 bg-gray-200 relative ">

            <div className="absolute bottom-[-8vh] right-0  bg-white p-4 md:w-[85vh]">
                <div className="flex flex-row gap-4">
                    <h1 className="text-3xl">TM</h1>
              <h1 className=" text-2xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor .
              </h1>

              </div>
              <p >
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                vel accusamus minima quia nulla ipsum dolorum aliquam aut, quos
                corrupti?{" "}
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default aboutSection;
