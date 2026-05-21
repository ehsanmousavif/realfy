import { QuestionCircle } from "@solar-icons/react-perf/category/style/LineDuotone";
import { IconUpper } from "../../root/icon-upper-sections";
import { TimeLineItems } from "./time-line-items";

const dt = [
  {
    title: "Project Request",
    description:
      "You submit a project request by sharing your idea, goals, and requirements through the form.",
    id: 1,
  },
  {
    title: "Review & Proposal",
    description:
      "I review your request and provide a clear proposal, timeline, and pricing.",
    id: 2,
  },
  {
    title: "Kickoff & Planning",
    description:
      "Once confirmed, we align on direction, references, and expectations before production begins.",
    id: 3,
  },
  {
    title: "Production",
    description:
      "The video is edited and produced with a focus on quality, pacing, and storytelling.",
    id: 4,
  },
  {
    title: "Review & Revisions",
    description:
      "You receive a preview and request revisions if needed to fine-tune the final result.",
    id: 5,
  },
  {
    title: "Final Delivery",
    description:
      "The final files are delivered in the required formats, ready for publishing.",
    id: 6,
  },
];

export function TimeLine() {
  return (
    <div className="mt-40 mx-auto flex flex-col items-center justify-center gap-8 px-4 w-full relative">
      <IconUpper
        title="How It Works"
        icon={<QuestionCircle className="w-6 h-6" />}
      />
      <span className="text-2xl md:text-4xl  font-bold text-center">
        My Work Process
      </span>
      <TimeLineItems data={dt} />
    </div>
  );
}
