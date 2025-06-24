import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Images } from "lucide-react";
import ourteam from "../../api/ourteam.json";

function teamSection() {
  return (
    <section className="mx-5 flex lg:flex-col flex-col justify-center gap-5 ">
      <h1 className="text-2xl font-bold mx-auto underline underline-offset-4">
        Our Core Teams
      </h1>
      <div>
        <div className="max-md:hidden mx-6 flex justify-center items-center">
          {/* // 33% of the carousel width. */}
          <Carousel className="flex flex-row justify-center items-center lg:w-[80vw]">
            <div className="flex justify-center items-center">
              <CarouselContent>
                {ourteam.map((item) => {
                  const { id, images, title, heading } = item;
                  return (
                    <CarouselItem key={id} className="basis-1/3">
                      <div className="flex flex-col gap-3">
                        <img
                          className="w-[100%] h-[60vh]"
                          src={images}
                          alt="img"
                        />

                        <div className="flex flex-col justify-center items-center">
                          <h1>{title}</h1>
                          <p>{heading}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="max-md:hidden cursor-pointer" />
              <CarouselNext className="cursor-pointer max-md:hidden" />
            </div>
          </Carousel>
        </div>
        <div className="lg:hidden">
          {/* // 50% on small screens and 33% on larger screens. */}
          <Carousel className="w-[92vw]">
            <CarouselContent>
              {ourteam.map((item) => {
                const { id, images, title, heading } = item;
                return (
                  <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="flex flex-col gap-3 max-md:min-w-full">
                      <img
                        className="max-md:w-[100%] max-md:h-[50vh]"
                        src={images}
                        alt="img"
                      />

                      <div className="flex flex-col w-[50vw]  justify-center tems-center max-md:justify-center max-md:items-center max-md:w-[95vw]">
                        <h1>{title}</h1>
                        <p>{heading}</p>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default teamSection;
