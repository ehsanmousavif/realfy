import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "../manual/button";

export const menuItems = [
    {
        label: "Home",
        path: "/"
    },
    {
        label: "Work",
        path: "/work"
    },
    {
        label: "Services",
        path: "/services"
    },
    {
        label: "About Me",
        path: "/about"
    },
    {
        label: "Contact",
        path: "/contact"
    }
]

export function Menu() {

    return (
        <div className="max-w-sm w-full fixed top-2 left-1/2 -translate-x-1/2 md:translate-x-0 md:relative md:left-auto md:bottom-auto md:mx-auto gap-4 flex items-center justify-center text-white bg-background/90 border border-foreground/10 rounded-2xl p-4 from-transparent font-medium z-50">
            <ul className="flex items-center gap-4">
                {menuItems.map((item) => {
                    return <li key={item.label}>{item.label}</li>
                })}

            </ul>
            {/* <div className="flex w-full justify-start md:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Open</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="flex flex-col gap-2 h-100 w-64 backdrop-blur-2xl bg-background opacity-80">
                        {menuItems.map((item) => {
                            return (<DropdownMenuItem className="text-md font-bold" key={item.label}>
                                {item.label}
                            </DropdownMenuItem>)
                        })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div> */}
        </div>)
}