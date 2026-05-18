import { AlgeriaFlagIcon, ArgFlagIcon, AzFlagIcon, CanadianFlagIcon, DenFlagIcon, GeorgiaFlagIcon, IndiaFlagIcon, IranFlagIcon, IraqFlagIcon, ItalyFlagIcon, MoroccoFlagIcon, SpainFlagIcon, SwiFlagIcon, TurkeyFlagIcon, UsFlagIcon } from "@/components/icons/flags-icons";
import { Marquee } from "../../component/marquee";


export function CountryMarquee() {
    return (
        <Marquee pauseOnHover>
            <div className="flex items-center gap-4">
                <IranFlagIcon />
                <ArgFlagIcon />
                <AlgeriaFlagIcon />
                <AzFlagIcon />
                <CanadianFlagIcon />
                <DenFlagIcon />
                <GeorgiaFlagIcon />
                <IndiaFlagIcon />
                <IraqFlagIcon />
                <ItalyFlagIcon />
                <MoroccoFlagIcon />
                <SpainFlagIcon />
                <SwiFlagIcon />
                <TurkeyFlagIcon />
                <UsFlagIcon />
            </div>
        </Marquee>
    );
}