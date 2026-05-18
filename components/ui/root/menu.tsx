import { Button } from "../component/shadcn/button";


export const menuItems = [
  { label: "Home", path: "/" },
  { label: "Work", path: "/work" },
  { label: "Services", path: "/services" },
  { label: "About Me", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export function Menu() {
  return (
    <div
      className="fixed z-50 w-full max-w-md left-1/2 -translate-x-1/2 md:top-4 top-auto bottom-2 md:bottom-auto rounded-2xl backdrop-blur-md border px-4 py-3 bg-background/80 border-accent"
    >
      <div className="flex items-center justify-center">
        {menuItems.map((item) => (
          <Button variant={"ghost"} key={item.label} className="text-sm text-foreground font-bold cursor-pointer">
            {item.label}
          </Button >
        ))}
      </div>
    </div>
  );
}