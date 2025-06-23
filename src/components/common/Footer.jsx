import React from "react";
import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { FiYoutube } from "react-icons/fi";
import { RiTwitterLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
function Footer() {
  return (
    <section className="bg-black/70 md:pt-[250px] max-md:h-50vh max-md:w-[98vw] max-md:p-5 max-md:flex-col max-md:flex pb-[40px] mt-[400px] max-md:mt-[30vh] ">
      <div className="relative max-md:flex-col max-md:w-[92vw] max-md:flex">
        <div className="md:w-[200vh] max-md:flex max-md:flex-col max-md:top-[-25vh]  absolute md:bottom-[65vh] md:mt-[-1px] ">
          <div className="md:px-35 md:py-40 md:mx-[5vh] max-md:w-[90vw] max-md:min-w-full max-md:pb-5 w-full max-w-full gap-6 bg-gray-300  flex flex-col justify-center items-center">
            <div className="text-4xl max-md:text-2xl max-md:text-center text-black">
              {" "}
              Let's get to know each other better.{" "}
            </div>
            <div className="text-white bg-black w-fit md:py-2 px-3 text-md">
              {" "}
              Click Now{" "}
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="flex  md:mx-[150px] max-md:flex-col  flex-row gap-[100px] max-md:gap-[25px] justify-center">
            <div className="flex flex-col max-md:flex-col md:w-md">
              <div className="invert max-md:items-center flex max-md:justify-center">
                <img
                  src="images/uilogo.png"
                  width={100}
                  height={70}
                  alt="img"
                />
              </div>
              <div className="md:w-2xs  max-md:w-[85vw] max-md:text-center text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                molestiae cupiditate est.
              </div>
            </div>
            <div className="max-md:flex max-md:flex-col md:w-md max-md:text-center gap-5">
              <div className="text-white flex md:justify-start max-md:items-center max-md:justify-center underline underline-offset-8">
                Menu
              </div>
              <div className="text-white max-md:w-[90vw] mt-[10px]">
                <div>Home</div>
                <div>About Us</div>
                <div>Products</div>
                <div>Services</div>
                <div>Contact Us</div>
              </div>
            </div>
            <div className="md:w-md gap-1 flex-col max-md:items-center max-md:justify-center flex">
              <div className="text-white flex justify-start  underline underline-offset-8">
                Follow Us
              </div>
              <div className="flex flex-row gap-3 justify-start mt-[10px]">
                <div>
                  <FiFacebook className="w-6 h-6 text-white" />
                </div>
                <div>
                  <IoLogoInstagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <FiYoutube className="w-6 h-6 text-white" />
                </div>
                <div>
                  <RiTwitterLine className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <Button className="bg-black/70 px-2 mt-6 py-3 text-white rounded-2xl text-xs flex flex-row gap-6 w-[190px]">Subscrib Now<FaArrowRightLong className="text-white my-auto ml-[55px] w-fit" /></Button>
                
              </div>
            </div>
            <div className="text-white w-md max-md:w-[80vw] max-md:items-center max-md:justify-center flex-col flex max-md:flex-col h-45">
              <div className="underline underline-offset-8 flex justify-start">
                Addresh
              </div>
              <div className=" justify-center items-center flex flex-col gap-3 mt-[10px]">
                <div className="max-md:w-[70vw] max-md:text-center max-md:mx-auto">
                  At:- Bhubaneswar Achary Bihar Khorda 755028
                </div>
                <div className="flex justify-center items-center ">
                  <FiPhone className="text-white inline-block w-[32px] pr-3" />
                  9078429303
                </div>
              </div>
            </div>
          </div>
          <div className="text-white md:mt-10 md:mx-[150px] max-md:flex-col max-md:items-center max-md:justify-center flex justify-between">
            <div>Privacy Policy</div>
            <div>Term and Condition</div>
            <div>Services</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
