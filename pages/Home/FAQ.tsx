import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { FAQItems } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

const FAQ = () => {
  return (
    <MaxWidthWrapper
      id="testimonials"
      className="py-10 card-container mx-2 grid md:grid-cols-2 grid-cols-1 gap-5"
    >
      <h1 className="md:text-5xl text-4xl text-center lg:text-start font-bold mb-3 ">
        Frequently asked questions
      </h1>

      <Accordion type="single" collapsible className="w-full px-3">
        {FAQItems.map((_, index) => (
          <div
            key={index}
            className="border-2 border-primcolor border-opacity-50 p-3 my-2 rounded-lg"
          >
            <AccordionItem value={`item-${index + 1}`}>
              <AccordionTrigger className="fl-cen gap-2 font-semibold text-sm w-full">
                <Plus size={20} className="text-primcolor" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                rerum!
              </AccordionTrigger>
              <AccordionContent className="text-sm font-sans mt-3">
                Lorem ipsum dolor sit amet consectetur ducimus? Similique ea
                eaque dolorum, ipsa eius distinctio officiis explicabo!
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </MaxWidthWrapper>
  );
};

export default FAQ;
