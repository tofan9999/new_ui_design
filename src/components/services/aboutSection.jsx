import React from "react";
import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";

function aboutSection() {
  return (
    <section>
      <div className="lg:flex lg:flex-row lg:gap-35 lg:justify-center lg:items-center lg:py-25">
        <div>
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl p-4">
              {" "}
              Lorem ipsum dolor sit.
              <br /> Lorem ipsum dolor sit.
            </h1>
            <Button className="mx-4 py-2">
              Shedule a call
              <MdArrowOutward />
            </Button>
          </div>
          <div className="flex flex-col md:mt-35 gap-5">
            <div className="mx-4">
              <h1 className="text-3xl">Or you Can</h1>
            </div>
            <div>
              <table className="table-auto border mx-1 md:mx-4  text-left">
                <thead className="">
                  <tr className="border-b">
                    <th className="p-2  border-r mx-2">Name</th>
                    <th className="p-2 border-r border-l mx-2">Contact</th>
                    <th className="p-2 border-r border-l mx-2">About</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">John Doe</td>
                    <td className="p-2">+91 98765 43210</td>
                    <td className="p-2">Project Inquiry</td>
                  </tr>
                  {/* Add more rows here if needed */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div>
            <img
              src="images/watch.png"
              width={350}
              height={300}
              alt="img
                    "
            />
          </div>
          <div className="flex flex-row gap-4 justify-center">
            <div className="flex flex-col">
              <h1>Mondey to Saturday</h1>
              <p>Sunday - holiday</p>
            </div>
            <div className="flex flex-col">
              <h1>9:00 AM to 7.oo PM </h1>
              <p>deli time table</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default aboutSection;
