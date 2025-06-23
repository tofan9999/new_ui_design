import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import testimonial from "../../api/testimonial.json"
import { Button } from "@/components/ui/button";

const testimonialSection = () => {
  return (
    <section>
      <div className="flex flex-row items-center max-md:w-[95vw]  mt-10 h-[50vh] justify-center max-md:mx-2 mx-65 ">
        <Carousel className="md:w-full flex justify-center items-center max-md:w-[60vw] max-md:min-w-full max-md:mx-25">
            
          <CarouselContent className="!max-md:w-[95vw]">
            {testimonial.map((item,id)=>{
            const{name,location,title,quote}=item;
            return(
            <CarouselItem className="" key={id} >
              <div className="flex flex-col justify-center items-center gap-5 bg-gray-300 py-10 px-10 max-md:px-2 rounded-3xl outline-2 m-3 max-md:p-2 max-md:w-[90vw] outline-amber-500  ">
              <h1 className="text-2xl">{title}</h1>
              <div className="flex flex-row gap-20">
              <h1 className="text-xs">{location}</h1>
              <h1 className="text-xs">{name}</h1>
              </div>
              <p className="w-[50%]">"{quote}"</p>
              </div>


            </CarouselItem>
          
            );
          }) }
            
          </CarouselContent>
          <CarouselPrevious className="max-md:hidden cursor-pointer"/>
          <CarouselNext className="cursor-pointer max-md:hidden" />
          
          
        </Carousel>

        {/* small screen */}

        <Carousel>
  
</Carousel>
      </div>

      {/* anadar section */}

      <div className="flex flex-row-reverse mt-10 max-md:flex-col max-md:w-[98vw] justify-center gap-10 mx-[]">
        <div>
          <div className=" md:w-[65vh] bg-gray-300   md:px-[35vh]  py-[40vh] relative"></div>
        </div>
        <div className="my-auto">
          <div className=" px-[5vh] flex flex-col  gap-4 md:py-[20vh]">
            <h1 className="text-4xl w-xs font-bold">
              All inclusive free with no hidden could period
            </h1>
            <p className="md:w-[55vh]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              voluptatem laborum obcaecati ab possimus fugiat? Facere doloremque
              voluptatum nesciunt beatae.
            </p>
            <Button className="p-4 w-[22vh] bg-black/70 text-white">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default testimonialSection;
