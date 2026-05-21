
import { NoEntryIcon, PayPal, TickIcon } from "./_icon";
import Image from "next/image";
import { IconUpper } from "../../root/icon-upper-sections";
import { AccordionItem, AccordionTrigger, AccordionContent, Accordion } from "../components/shadcn/accordion"
import { Separator } from "../components/shadcn/separator";

const items = [
  { value: "billing", trigger: "How does the collaboration process work?", content: "We offer monthly and annual subscription plans. Billing is charged at the beginning of each cycle, and you can cancel anytime. All plans include automatic backups, 24/7 support, and unlimited team members.", },
  {
    value: "delivery_time",
    trigger: "How long does it take to complete a video project?",
    content:
      "It depends on the complexity of the project. Short-form videos usually take 2–5 days, while larger commercial or YouTube edits may take 1–2 weeks.",
  },
  {
    value: "specialization",
    trigger: "What type of videos do you specialize in?",
    content:
      "I specialize in short-form content, YouTube videos, commercial ads, and motion graphics tailored for brands, creators, and social media growth.",
  },
  {
    value: "revisions",
    trigger: "Can I request revisions after the first draft?",
    content:
      "Yes, each project includes revision rounds to ensure the final result matches your vision and brand style.",
  },
]

export function Faq() {
  return (
    <div className=" mt-40 flex flex-col items-center justify-center gap-8 w-full">
      <IconUpper title="FAQ" icon="/images/landing/faq.svg" />
      <h2 className="text-2xl md:text-4xl -mt-4 font-bold text-center">
        Frequently Asked Questions{" "}
      </h2>

      <Accordion
        type="single"
        className="max-w-6xl rounded-lg flex flex-col"
        defaultValue="billing"
      >
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value} className="p-2">
            <AccordionTrigger className="my-4 px-4">
              {item.trigger}
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col items-start gap-6">
                <Separator />
                <div className="flex items-baseline gap-2">
                  <div className="size-2 aspect-square rounded-full bg-green-400"></div>
                  {item.content}
                </div>
                <div className="w-full flex items-stretch gap-4">
                  <div className="px-3 py-0.5 rounded-3xl border-2 border-[#184240] flex items-center gap-2">
                    <div className="border-2 border-teal-300 rounded-xl">
                      <TickIcon />
                    </div>
                    <PayPal height="32" width="90" />
                  </div>
                  <div className="px-4 rounded-3xl border-2 border-[#184240] flex items-center gap-2">
                    <div className="border-2 border-teal-300 rounded-[6px]">
                      <TickIcon />
                    </div>
                    <Image
                      alt=""
                      width={30}
                      height={15}
                      src="/images/landing/Mastercard-logo.svg"
                    />
                  </div>
                  <div className="px-4 rounded-3xl border-2 border-[#421818] flex items-center gap-2">
                    <NoEntryIcon />
                    <Image
                      alt=""
                      width={30}
                      height={15}
                      src="/images/landing/Mastercard-logo.svg"
                    />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
