import { VerifiedCheck } from "@solar-icons/react-perf/category/style/LineDuotone";
import { Magnifier } from "@solar-icons/react-perf/LineDuotone";
import { cn } from "@/lib/utils";
import { Button } from "../../manual/button";

export type PricingItem = {
    id: number;
    title: string;
    price: string;
    des: string[];
    isDefault?: boolean;
    isCustom?: boolean;
};

type PricingSectionProps = {
    pricingData: PricingItem[];
};

export default function PricingSection({ pricingData }: PricingSectionProps) {
    return (
        <div className="flex flex-col md:flex-row items-stretch gap-4 mx-auto group">
            {pricingData.map((x) => {
                return (
                    <div
                        key={x.id}
                        className={cn(
                            `
              w-full sm:max-w-sm
              relative overflow-hidden
              border border-foreground/10
              flex flex-col justify-between gap-5
              rounded-2xl
             p-4
              transition-all duration-500
              bg-transparent
              group-hover:not-[&:hover]:bg-black/40
              before:content-['']
              before:absolute before:inset-0
              before:transition-all before:duration-500
              `,
                            x.isDefault
                                ? `
                 before:bg-[radial-gradient(circle_at_70%_10%,rgba(36,190,100,0.8),transparent_50%)]
                `
                                : `
                 before:bg-[radial-gradient(circle_at_70%_10%,rgba(36,190,100,0.8),transparent_50%)]
                  before:opacity-0
                  hover:before:opacity-100
                `,
                        )}
                    >
                        {/* HEADER */}
                        <div className="flex flex-col gap-4 items-start">
                            <span className="font-bold text-foreground/50 text-sm md:text-base lg:text-lg">
                                {x.title}
                            </span>

                            <div className="flex items-center gap-1 font-bold text-base md:text-lg lg:text-xl">
                                <p>From</p>
                                {x.price}
                                <div className="flex gap-0.5 text-sm">/ project</div>
                            </div>

                            <span className="text-xs md:text-sm text-foreground/50">
                                Perfect for high-impact short-form content
                            </span>

                            {/* FEATURES */}
                            <div className="flex flex-col gap-2 items-start mt-2">
                                {x.des.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-2 text-[10px] md:text-xs"
                                    >
                                        <VerifiedCheck size={24} />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Button
                            size="lg"
                            variant="outline"
                            className={cn(
                                "flex items-center text-sm gap-2 px-4 py-6 font-extrabold",
                                x.isDefault && "bg-foreground text-background",
                            )}
                        >
                            <Magnifier className="-rotate-45" size={12} />
                            Start a Project
                        </Button>
                    </div>
                );
            })}
        </div>
    );
}
