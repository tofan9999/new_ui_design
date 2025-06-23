import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faq from "../../api/faq.json";

const faqSection = () => {
  return (
    <div className="flex gap-25 max-md:flex-col max-md:w-[98vw] max-md:gap-4 py-30 max-md:mx-[2] md:mx-55">   
       <div className="flex-col h-fit max-md:w-[98vw] flex p-5 bg-gray-300 w-fit">
        <div className="p-3">Lorem ipsum dolor sit amet.</div>
        <div className="p-3">Lorem ipsum dolor sit amet.</div>
        <div className="p-3">Lorem ipsum dolor sit amet.</div>
       
        
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


  );
};

export default faqSection;
