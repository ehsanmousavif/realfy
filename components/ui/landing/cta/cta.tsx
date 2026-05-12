import { KeyMinimalistic2 } from "@solar-icons/react-perf/category/style/LineDuotone";
import { FieldLabel, FieldSet } from "../../field";
import { Input } from "../../input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../select";
import { Textarea } from "../../textarea";

export function Cta() {
    return (
        <div className="w-full max-w-5xl mx-auto mt-20 md:mt-40 border border-accent rounded-2xl p-4 md:p-6 flex flex-col gap-8">
            <div className="rounded-full w-fit mx-auto bg-accent text-foreground/70 p-3 flex items-center gap-2">
                <KeyMinimalistic2 className="w-6 h-6" />
                <p>Start a Project</p>
            </div>

            <span className="text-2xl md:text-4xl -mt-4 font-bold text-center">
                Tell Me About Your Project            </span>
            <div className="flex flex-col gap-4">
                <span className="text-xl font-bold text-center md:text-left">
                    Contact information
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FieldSet className="flex flex-col gap-2">
                        <FieldLabel htmlFor="fullName" className="flex gap-1">
                            Full Name <span className="text-green-700">*</span>
                        </FieldLabel>

                        <Input
                            id="fullName"
                            type="text"
                            required
                            placeholder="Name"
                            className="rounded-full border border-accent bg-accent px-4 py-2"
                        />
                    </FieldSet>

                    <FieldSet className="flex flex-col gap-2">
                        <FieldLabel htmlFor="company" className="flex gap-1">
                            Company <span className="text-green-700">*</span>
                        </FieldLabel>

                        <Input
                            id="company"
                            type="text"
                            required
                            placeholder="Company"
                            className="rounded-full border border-accent bg-accent px-4 py-2"
                        />
                    </FieldSet>
                </div>

                <FieldSet className="flex flex-col gap-2">
                    <FieldLabel htmlFor="email" className="flex gap-1">
                        Email Address <span className="text-green-700">*</span>
                    </FieldLabel>

                    <Input
                        id="email"
                        type="email"
                        required
                        placeholder="you@gmail.com"
                        className="rounded-full border border-accent px-4 py-2"
                    />
                </FieldSet>
            </div>

            {/* Project */}
            <div className="flex flex-col gap-4">
                <span className="text-xl font-bold text-center md:text-left">
                    Project Information
                </span>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FieldSet className="flex flex-col gap-2">
                        <FieldLabel className="flex gap-1">
                            What Video Do You Need?
                            <span className="text-green-700">*</span>
                        </FieldLabel>

                        <Select defaultValue="short">
                            <SelectTrigger className="w-full rounded-full border border-accent bg-accent px-4 py-5">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="short">
                                    Short-form video
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </FieldSet>

                    <FieldSet className="flex flex-col gap-2">
                        <FieldLabel className="flex gap-1">
                            What’s Your Deadline?
                            <span className="text-green-700">*</span>
                        </FieldLabel>

                        <Select defaultValue="asap">
                            <SelectTrigger className="w-full rounded-full border border-accent bg-accent px-4 py-5">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="asap">
                                    ASAP (Rush project)
                                </SelectItem>

                                <SelectItem value="week">
                                    Within a week
                                </SelectItem>

                                <SelectItem value="month">
                                    Within a month
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </FieldSet>

                    <FieldSet className="flex flex-col gap-2">
                        <FieldLabel className="flex gap-1">
                            Budget
                            <span className="text-green-700">*</span>
                        </FieldLabel>

                        <Select defaultValue="500">
                            <SelectTrigger className="w-full rounded-full border border-accent bg-accent px-4 py-5">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="500">
                                    Under $500
                                </SelectItem>

                                <SelectItem value="1000">
                                    $500 – $1,000
                                </SelectItem>

                                <SelectItem value="3000">
                                    $1,000 – $3,000
                                </SelectItem>

                                <SelectItem value="plus3000">
                                    +$3,000
                                </SelectItem>

                                <SelectItem value="unsure">
                                    Not sure yet
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </FieldSet>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <span className="text-xl font-bold text-center md:text-left">
                    Message
                </span>

                <Textarea
                    placeholder="Tell me about your idea..."
                    className="min-h-40 rounded-2xl border border-accent bg-accent px-4 py-3 resize-none"
                />
            </div>
            <button
                className="
          relative overflow-hidden rounded-full px-6 py-3
          flex items-center justify-center gap-2
          shadow-[inset_0_2px_2px_rgba(255,255,255,.15)]
          before:absolute before:top-0 before:left-0 before:h-px before:w-full
          before:bg-gradient-to-r before:from-transparent before:via-[#99E1CE] before:to-transparent
          after:absolute after:bottom-0 after:left-0 after:h-px after:w-full
          after:bg-gradient-to-r after:from-transparent after:via-[#99E1CE] after:to-transparent
        "
            >
                <div className="size-3 rounded-full border-2 border-white" />
                <p>Start a project</p>
            </button>
        </div>
    );
}