import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faq from "../../api/faq.json";
import { Button } from "../ui/button";

const faqSection = () => {
  return (
    <section>
    <div className="flex gap-25 max-md:flex-col max-md:w-[98vw] max-md:gap-4 md:py-30 max-md:mx-[2] md:mx-45">   
       <div className="flex-col h-fit max-md:w-[98vw] flex p-5  w-fit">
        <div className="p-3 text-3xl font-bold">Let us know how we can help</div>
        {/* <div className="p-3">Lorem ipsum dolor sit amet.</div>
        <div className="p-3">Lorem ipsum dolor sit amet.</div> */}
       
        
       </div>

    <div className="max-md:w-[95vw]">
       <Accordion type="single" collapsible className="w-[560px] max-md:p-4 max-md:w-[90vw]">
        {faq.map((item,id) => {
          const { question, answer } = item;
          return (
            <AccordionItem key={id} value={`item-${id}`}>
              <AccordionTrigger>
                <span className="font-semibold text-sm flex items-center gap-2">
                  <span>{id < 10 ? `0${id}` : id}.</span> {question}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-700 max-md:pl-6">{answer}</p>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

      
    </div>

    </div>

    <div className="flex lg:flex-row flex-col p-5 gap-5 lg:gap-32 lg:justify-center md:mx-45 lg:w-[80%]">
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
        <div>
            <div className="flex  flex-col lg:flex-col gap-3">
                <div>
                    <input type="text" id="name" className="outline-2" />
                </div>
                <div>
                
                <Button>Send Message</Button>
                </div>

            </div>
        </div>

    </div>

</section>
  );
};

export default faqSection;
