
import { NoEntryIcon, PayPal, TickIcon } from "./_icon";
import Image from "next/image";
import { Separator } from "../../component/shadcn/separator";
import { IconUpper } from "../../root/icon-upper-sections";
import { AccordionItem, AccordionTrigger, AccordionContent, Accordion } from "../../component/shadcn/accordion";

const items = [
  {
    value: "billing",
    trigger: "How does the collaboration process work?",
    content:
      "We offer monthly and annual subscription plans. Billing is charged at the beginning of each cycle, and you can cancel anytime. All plans include automatic backups, 24/7 support, and unlimited team members.",
  },
  {
    value: "security",
    trigger: "Is my data secure?",
    content:
      "Payments can be made securely through PayPal, credit/debit cards (Visa & MasterCard), or other agreed international payment methods. To start a project, a percentage of the total cost is required upfront to confirm the booking. The remaining balance is paid after project completion, before final delivery. This structure ensures clarity, security, and a smooth collaboration for both sides.",
  },
  {
    value: "integration",
    trigger: "How long does a project take?",
    content:
      "We integrate with 500+ popular tools including Slack, Zapier, Salesforce, HubSpot, and more. You can also build custom integrations using our REST API and webhooks.",
  },

  {
    value: "hello world",
    trigger: "How many revisions are included?",
    content:
      "We integrate with 500+ opular tools including Slack, Zapier, Salesforce, HubSpot, and more. You can also build custom integrations using our REST API and webhooks.",
  },
];

export function Faq() {
  return (
    <div className=" mt-40 flex flex-col items-center justify-center gap-8 w-full">
      <IconUpper title="FAQ" icon="/images/landing/faq.svg" />
      <span className="text-2xl md:text-4xl -mt-4 font-bold text-center">
        Frequently Asked Questions{" "}
      </span>

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
