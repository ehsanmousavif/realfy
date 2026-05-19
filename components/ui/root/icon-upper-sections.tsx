import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  icon: string | ReactNode;
  title: string;
}

export function IconUpper({ icon, title }: Props) {
  return (
    <div
      className="px-3 py-2 text-xs font-bold rounded-full text-foreground/70 flex items-center gap-2 border "
      style={{
        background: `
      linear-gradient(#111111, #111111) padding-box,
      linear-gradient(to bottom, #000,#262626,#000) border-box
    `,
        backgroundClip: "padding-box, border-box",
        backgroundOrigin: "border-box",
      }}
    >
      {typeof icon === "string" ? (
        <Image width={17} height={17} alt="icon" src={icon} />
      ) : (
        icon
      )}
      <span className="whitespace-nowrap">{title}</span>
    </div>
  );
}
