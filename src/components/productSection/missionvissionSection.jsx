import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function missionvissionSection() {
  return (
    <section>
      <div className="flex lg:flex-row-reverse  flex-col-reverse lg:gap-10 lg:mx-25 lg:my-18">
        <div className="flex flex-col p-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold underline underline-offset-2 flex flex-row"><FaLongArrowAltRight className="my-auto" />Mission</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis nostrum eum esse voluptatem? Corrupti molestias quod
              a voluptates vero facilis nobis veniam reprehenderit beatae neque?
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold underline underline-offset-2 flex flex-row"><FaLongArrowAltRight className="my-auto" />Empworment</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur, libero minima ipsam repellat unde nesciunt. A magni
              non ducimus ad corrupti voluptas similique dolores aliquam?
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold underline underline-offset-2 flex flex-row"><FaLongArrowAltRight className="my-auto" />Vission</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
              exercitationem molestias eius. Amet excepturi, voluptatem sint id
              doloremque modi, iusto dolorem, unde obcaecati dolorum alias.
            </p>
          </div>
        </div>
        <div className="p-5">
          <p className="text-4xl font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>


        </div>
      </div>
    </section>
  );
}

export default missionvissionSection;
