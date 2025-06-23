import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";

function heroSection() {
  return (
    <section>
          <div className="max-md:w-[98vw]">
            <div className="bg-gray-300 max-md:flex-col max-md:flex max-md:mb-10 md:pb-8">
              <div className="flex w-full max-md:flex-col max-md:flex md:px-[4vh] bg-gray-300 py-[8vh] flex-row gap-[15vh]">
                <div className=" flex flex-col max-md:px-2 justify-end md:ml-[15vh] md:mt-[50vh] gap-3">
                  <h1 className="text-6xl md:w-[80vh] ">
                    Do not to be <br /> a
                    Stranger
                  </h1>
                  <p className="md:w-[90vh]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                    ad ea cumque hic. Fugit, praesentium?
                  </p>
                </div>
                <div className="flex  justify-center flex-col items-center max-md:w-[98vw] ">
                  <img className="max-md:w-[98vw]" src="images/meme.png" width={400} height={350} alt="img" />
                  <div className="flex justify-end max-md:hidden">
                    <FaArrowCircleRight className="mr-[-45vh] flex justify-end items-end w-6 h-6 mt-4 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default heroSection