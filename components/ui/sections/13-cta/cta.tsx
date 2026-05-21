"use client";

import { IconUpper } from "@/components/ui/root/icon-upper-sections";
import { Button } from "@/components/ui/sections/components/shadcn/button";
import {
  FieldLabel,
  FieldSet,
} from "@/components/ui/sections/components/shadcn/field";
import { Input } from "@/components/ui/sections/components/shadcn/input";
import {
  SelectTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/sections/components/shadcn/select";
import { Textarea } from "@/components/ui/sections/components/shadcn/textarea";

const projectFields = [
  {
    name: "videoType",
    id: "videoType",
    label: "What Video Do You Need?",
    defaultValue: "short",
    items: [
      { label: "Short-form video", value: "short" },
      { label: "YouTube Video", value: "youtube" },
      { label: "Commercial Ad", value: "commercial" },
      { label: "Motion Graphic", value: "motion" },
    ],
  },
  {
    name: "deadline",
    id: "deadline",
    label: "What’s Your Deadline?",
    defaultValue: "asap",
    items: [
      { label: "ASAP (Rush project)", value: "asap" },
      { label: "Within a week", value: "week" },
      { label: "Within a month", value: "month" },
    ],
  },
  {
    name: "budget",
    id: "budget",
    label: "Budget",
    defaultValue: "500",
    items: [
      { label: "Under $500", value: "500" },
      { label: "$500 – $s1,000", value: "1000" },
      { label: "$1,000 – $3,000", value: "3000" },
      { label: "+$3,000", value: "plus3000" },
      { label: "Not sure yet", value: "unsure" },
    ],
  },
];

export function Cta() {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-20 md:mt-40 border border-accent rounded-2xl p-4 md:p-6 flex flex-col gap-8 overflow-hidden">
      <div className="max-w-sm mx-auto">
        <IconUpper icon="/images/landing/key-2.svg" title="Start a Project" />
      </div>

      <h2 className="text-2xl md:text-4xl -mt-4 font-bold text-center">
        Tell Me About Your Project
      </h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        {/* CONTACT */}
        <div className="flex flex-col gap-4">
          <span className="text-md md:text-xl font-bold text-center md:text-left">
            Contact information
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FieldSet className="flex flex-col gap-2">
              <FieldLabel htmlFor="fullName">
                Full Name <span className="text-green-700">*</span>
              </FieldLabel>

              <Input
                id="fullName"
                name="fullName"
                type="text"
                required
                placeholder="Name"
                className="rounded-full border border-accent bg-accent py-3 px-6"
              />
            </FieldSet>

            <FieldSet className="flex flex-col gap-2">
              <FieldLabel htmlFor="company">
                Company <span className="text-green-700">*</span>
              </FieldLabel>

              <Input
                id="company"
                name="company"
                type="text"
                required
                placeholder="Company"
                className="rounded-full border border-accent bg-accent py-3 px-6"
              />
            </FieldSet>
          </div>

          <FieldSet className="flex flex-col gap-2">
            <FieldLabel htmlFor="email">
              Email Address <span className="text-green-700">*</span>
            </FieldLabel>

            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@gmail.com"
              className="rounded-full border border-accent bg-accent py-3 px-6"
            />
          </FieldSet>
        </div>

        {/* PROJECT INFO */}
        <div className="flex flex-col gap-6">
          <span className="text-md md:text-xl font-bold text-center md:text-left">
            Project Information
          </span>

          <div className="flex flex-col md:flex-row gap-8">
            {projectFields.map((field) => (
              <FieldSet key={field.id} className="flex w-full flex-col gap-3">
                <FieldLabel htmlFor={field.id}>
                  {field.label}
                  <span className="text-green-700">*</span>
                </FieldLabel>

                <Select defaultValue={field.defaultValue} name={field.name}>
                  <SelectTrigger
                    id={field.id}
                    className="w-full rounded-full border border-accent bg-accent p-6"
                  >
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>

                  <SelectContent className="p-2 rounded-xl">
                    {field.items.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FieldSet>
            ))}
          </div>
        </div>

        {/* MESSAGE */}
        <div className="flex flex-col gap-4">
          <span className="text-md md:text-xl font-bold text-center md:text-left">
            Textarea
          </span>

          <FieldLabel htmlFor="message">
            Describe Your Vision <span className="text-green-700">*</span>
          </FieldLabel>

          <Textarea
            id="message"
            name="message"
            required
            placeholder="Tell me about your idea..."
            className="min-h-40 rounded-2xl border border-accent bg-accent px-4 py-3 resize-none"
          />
        </div>

        {/* SUBMIT */}
        <Button
          type="submit"
          className="relative overflow-hidden rounded-full p-6 flex items-center justify-center gap-2 border-2 text-foreground transition-all duration-300"
          style={{
            background:
              "linear-gradient(#000, #000) padding-box, radial-gradient(circle, rgb(153, 225, 206), rgba(153, 225, 206, 0.1)) border-box",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
        >
          <div className="size-3 rounded-full border-2 border-white" />
          <p>Start a project</p>
        </Button>
      </form>
    </div>
  );
}
