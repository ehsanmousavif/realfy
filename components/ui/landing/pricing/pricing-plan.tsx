import { Magnifier } from "@solar-icons/react-perf/LineDuotone";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../component/shadcn/button";
import Link from "next/link";

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
              "flex flex-col relative overflow-hidden z-0 gap-4 justify-between max-w-sm border border-accent p-4 rounded-2xl",
              x.isDefault
                ? "bg-linear-240 from-[#3dae70] via-green-950 to-black"
                : "bg-black before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-linear-240 before:from-[#3dae70] before:via-green-950 before:to-black before:opacity-0 before:transition-opacity before:duration-700 hover:before:opacity-100",
            )}
          >
            <div className="flex relative z-50 flex-col gap-4 items-start">
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

              <div className="flex flex-col gap-2 items-start mt-2">
                {x.des.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-[10px] md:text-xs"
                  >
                    <Image
                      width={30}
                      height={40}
                      className="p-2 bg-foreground rounded-full aspect-square"
                      alt=""
                      src="/images/landing/tick.svg"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <Button
              asChild
              size="lg"
              variant={x.isDefault ? "default" : "outline"}
              className="flex items-center text-sm gap-2 px-4 py-6 font-extrabold cursor-pointer"
            >
              <Link href={"#"}>
                <Magnifier className="-rotate-45" size={12} />
                Start a Project
              </Link>
            </Button>
          </div>
        );
      })}
    </div>
  );
}
