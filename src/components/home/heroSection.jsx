import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

function heroSection() {
  return (
    <section>
      <div>
        <div className="bg-gray-300 pb-8 max-md:flex-col max-md:w-[98vw] max-md:flex">
          <div className="flex w-full px-[4vh] max-md:flex-col max-md:w-[95vw] max-md:gap-3 max-md:flex bg-gray-300 py-[8vh] flex-row gap-[15vh]">
            <div className="text-6xl  max-md:text-4xl md:w-[70vh] max-md:w-[60vw] max-md:text-cneter max-md:mr-[15vw] max-md:gap-5 md:mt-[50vh] flex flex-row justify-end">
              invest for a <br />
              better worlds
            </div>
            <div className="flex justify-center flex-col max-md:flex-col max-md:gap-5 items-center">
              <img src="images/meme.png" width={400} height={350} alt="img" />
              <p className="md:w-[100vh]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                ad ea cumque hic. Fugit, praesentium?
              </p>
            </div>
          </div>

          <div className="flex w-full max-md:hidden flex-row justify-between px-[4vh]">
            <div>
              <img src="images/Frame1.png" width={100} height={45} alt="img" />{" "}
            </div>
            <div>
              <img src="images/Frame2.png" width={100} height={45} alt="img" />
            </div>
            <div>
              <img src="images/Frame3.png" width={100} height={45} alt="img" />
            </div>
            <div>
              <img src="images/Frame4.png" width={100} height={45} alt="img" />
            </div>
            <div>
              <img src="images/Frame2.png" width={100} height={45} alt="img" />
            </div>
            <div>
              <FaArrowCircleRight className="mr-[10vh] w-6 h-6 mt-4 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default heroSection;
