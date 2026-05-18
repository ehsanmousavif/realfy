import { Copyright } from "@solar-icons/react-perf/category/style/Bold";
import { Instagram, LinkedIn, Twitter, YouTube } from "./_icons";
import { menuItems } from "./menu";

const socials = [
  {
    label: "instagram",
    icon: <Instagram />,
  },
  {
    label: "linkedin",
    icon: <LinkedIn />,
  },
  {
    label: "youtube",
    icon: <YouTube />,
  },
  {
    label: "X(twitter)",
    icon: <Twitter />,
  },
];

export function Footer() {
  return (
    <footer className="max-w-6xl mx-auto flex flex-col gap-16 mt-15 md:mt-30 mb-8 md:mb-15 text-foreground">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left">
          <span className="text-xl font-bold">Useful Links</span>

          <div className="flex flex-row flex-wrap max-w-60 items-center justify-center md:flex-nowrap md:max-w-full gap-4 md:gap-8 text-foreground/60 ">
            {menuItems.map((x, idx) => (
              <span key={idx} className="transition-opacity hover:opacity-100">
                {x.label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left">
          <span className="text-xl font-bold">Contact Me</span>

          <span className="text-foreground/60 break-all">
            hello@alirezaabbasi@gmail.com
          </span>
        </div>

        <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left">
          <span className="text-xl font-bold">Social Media</span>

          <div className="flex flex-row items-center gap-4 md:gap-6 text-foreground/60">
            {socials.map((x) => (
              <span
                key={x.label}
                className="text-sm flex items-center gap-2 transition-opacity hover:opacity-100"
              >
                {x.icon}
                <div className="hidden md:block">{x.label}</div>
              </span>
            ))}
          </div>
        </div>
      </div>
      <span className="flex items-center justify-center md:justify-start gap-2 text-sm tracking-wider text-foreground/60 text-center">
        <Copyright />
        2024 Alireza Abbasi. All rights reserved.
      </span>
    </footer>
  );
}
