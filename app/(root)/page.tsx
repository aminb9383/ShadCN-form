import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div>
      <div className="max-w-md mx-auto p-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Next.js?</AccordionTrigger>
            <AccordionContent>
              Next.js is a React framework that enables server-side rendering,
              static site generation, and fast performance out of the box.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Do I need to know React?</AccordionTrigger>
            <AccordionContent>
              Yes. Next.js builds on top of React, so understanding React
              fundamentals like components, props, and hooks is essential.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Is Tailwind CSS included?</AccordionTrigger>
            <AccordionContent>
              Not by default, but you can easily add it. Many developers use
              Tailwind with Next.js for rapid UI development.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>What is shadcn/ui?</AccordionTrigger>
            <AccordionContent>
              It is a collection of beautifully designed, accessible components
              that you can copy and paste into your apps.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
