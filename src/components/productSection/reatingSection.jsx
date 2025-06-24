import React from "react";

function reatingSection() {
  return (
    <section>
      <div className="lg:flex lg:flex-row lg:gap-45 lg:my-30  lg:mx-45 lg:w-[80vw]">
        <div className="mx-4 mt-5 font-bold text-4xl">Yova in Numbers</div>
        <div className="grid grid-cols-2 grid-rows-3 gap-5 max-md:grid-cols-2 max-md:grid-rows-4 p-5"> 
          <div className="flex flex-col w-30 gap-2 lg:w-45">
            <h1 className="text-xs">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              magni quisquam fuga, consequatur doloribus sed.
            </h1>
            <p className="text-2xl font-bold">2016</p>
          </div>
          <div className="flex flex-col w-30 gap-8 lg:gap-6 lg:w-45">
            <h1 className="text-xs">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              dolore!
            </h1>
            <p className="text-2xl font-bold">%278M</p>
          </div>
          <div className="flex flex-col w-30 gap-4 lg:w-45">
            <h1 className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              adipisci.
            </h1>
            <p className="text-2xl font-bold">930</p>
          </div>

          <div className="flex flex-col w-30 gap-8 lg:w-45">
            <h1 className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p className="text-2xl font-bold">1-1.15</p>
          </div>
          <div className="flex flex-col w-30 gap-4 lg:w-45">
            <h1 className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nisi
              architecto temporibus deleniti molestiae quasi ex non quisquam
              unde consequatur. 
            </h1>
            <p className="text-2xl font-bold">1057+</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default reatingSection;
