import { QuestionCircle } from "@solar-icons/react-perf/category/style/LineDuotone"
import { TimeLineBase } from "./time-line-base"
const dt = [
    {
        title: "Project Request",
        description: "You submit a project request by sharing your idea, goals, and requirements through the form.",
        id: 1
    },
    {
        title: "Review & Proposal",
        description: "I review your request and provide a clear proposal, timeline, and pricing.",
        id: 2

    },
    {
        title: "Kickoff & Planning",
        description: "Once confirmed, we align on direction, references, and expectations before production begins.",
        id: 3

    },
    {
        title: "Production",
        description: "The video is edited and produced with a focus on quality, pacing, and storytelling.",
        id: 4
    },
    {
        title: "Production",
        description: "The video is edited and produced with a focus on quality, pacing, and storytelling.",
        id: 5
    },
    {
        title: "Production",
        description: "The video is edited and produced with a focus on quality, pacing, and storytelling.",
        id: 6
    },
]



export default function TimeLine() {
    return <div className="mt-40 mx-auto flex flex-col items-center justify-center gap-8 px-4 w-full relative">
        <div className="rounded-full bg-accent text-foreground/70 px-3 py-2 flex items-center gap-2">
            <QuestionCircle className="w-6 h-6" />
            <p>
                How It Works
            </p>
        </div>
        <span className="text-2xl md:text-4xl -mt-4 font-bold text-center">My Work Process</span>
        <TimeLineBase data={dt} />
    </div>
}