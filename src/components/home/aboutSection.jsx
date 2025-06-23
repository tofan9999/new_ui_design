import React from "react";

function aboutSection() {
  return (
    <section>
      <div className="flex flex-row max-md:flex-col max-md:gap-5 max-md:mt-4 max-md:w-[98vw] md:mx-[5.5vh] md:my-[5vh]">
        <div className="flex flex-row justify-end items-end gap-5  bg-gray-200   p-4  outline-gray-50 pt-[55vh]">
          <h1 className="text-2xl flex items-start justify-start pb-[10vh]">
            {" "}
            TM
          </h1>

          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qui
            assumenda vero quae reiciendis suscipit explicabo, maxime ratione
            ducimus perspiciatis vel modi deleniti iusto ipsa.
          </p>
        </div>

        <div className="bg-gray-300  p-4 outline-gray-50 pt-[55vh]">
          <div className="flex flex-row gap-5">
            <div className="text-2xl">TM</div>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qui
              assumenda vero quae reiciendis suscipit explicabo, maxime ratione
              ducimus perspiciatis vel modi deleniti iusto ipsa.
            </div>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            quidem numquam asperiores optio ex doloremque.
          </div>
        </div>
        <div className="flex flex-row justify-end items-end gap-5 bg-gray-200  p-4  outline-gray-50 pt-[55vh]">
          <h1 className="text-2xl flex items-start justify-start pb-[10vh]">
            {" "}
            TM
          </h1>

          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qui
            assumenda vero quae reiciendis suscipit explicabo, maxime ratione
            ducimus perspiciatis vel modi deleniti iusto ipsa.
          </p>
        </div>
      </div>
    </section>
  );
}

export default aboutSection;
