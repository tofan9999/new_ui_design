import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

function aboutSection() {
  return (
    <section>
      <div className="flex flex-col lg:flex-col lg:mx-10 lg:w-[92%] lg:gap-20 lg:py-35">
        <div className="flex flex-col w-[92vw] lg:flex-row  md:gap-25"> 
          <h1 className="text-3xl w-[92vw] p-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            
          </h1>
        
        <div className="w-[92vw]">
          <p className="text-md p-4 w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            consectetur repudiandae veniam commodi harum alias dignissimos
            provident quasi, similique temporibus veritatis, quisquam officia
            corporis laborum officiis nemo neque deserunt error repellendus
            dolores. Suscipit, illum odit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eaque aliquid sit ad quos, alias
            laudantium perferendis praesentium ipsa nostrum, distinctio omnis
            similique a ab animi.
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

    <div className="h-[80vh] lg:w-[450vw] w-[98vw] bg-gray-300">
        
        
     </div> 
    </section>
  );
}

export default aboutSection;
