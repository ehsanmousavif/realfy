import { DollarMinimalistic } from "@solar-icons/react-perf/category/style/LineDuotone";
import PricingSection, { PricingItem } from "./pricing-plan";

export const pricingData: PricingItem[] = [
    {
        id: 1,
        title: "Basic",
        price: "200",
        des: [
            "Up to 60s final duration",
            "Dynamic Captions",
            "Basic Color Grading",
            "Sound Design & SFX",
            "1 Revision included",
            "48-hour delivery",
        ],
    },
    {
        id: 2,
        title: "Standard",
        price: "540",
        des: [
            "Up to 60s final duration",
            "Dynamic Captions",
            "Basic Color Grading",
            "Sound Design & SFX",
            "Basic Color Grading",
            "1 Revision included",
            "Sound Design & SFX",
            "48-hour delivery",
            "1 Revision included",
        ],
    },
    {
        id: 3,
        title: "Premium",
        price: "2,150",
        isDefault: true,
        des: [
            "Up to 60s final duration",
            "Dynamic Captions",
            "Basic Color Grading",
            "Sound Design & SFX",
            "1 Revision included",
            "48-hour delivery",
        ],
    },
    {
        id: 4,
        title: "Pro",
        price: "1,000",
        des: [
            "Up to 60s final duration",
            "Dynamic Captions",
            "Basic Color Grading",
            "Sound Design & SFX",
            "Basic Color Grading",
            "1 Revision included",
            "Sound Design & SFX",
            "48-hour delivery",
            "1 Revision included",
        ],
    },
    {
        id: 5,
        title: "Custom",
        price: "---",
        isCustom: true,
        des: [
            "Up to 60s final duration",
            "Dynamic Captions",
            "Basic Color Grading",
            "Sound Design & SFX",
            "Basic Color Grading",
            "1 Revision included",
            "Sound Design & SFX",
            "48-hour delivery",
            "1 Revision included",
        ],
    },
];
export function Pricing() {

    return <div className="mt-30 justify-center gap-8 px-4 w-full flex flex-col items-center max-w-7xl mx-auto">
        <div className="rounded-full bg-accent text-foreground/70 px-3 py-2 flex items-center gap-2">
            <DollarMinimalistic className='w-6 h-6' />
            <p>Pricing</p>
        </div>
        <span className="text-2xl md:text-4xl -mt-4 font-bold text-center">Choose your plane</span>
        <PricingSection pricingData={pricingData} />
    </div>
}