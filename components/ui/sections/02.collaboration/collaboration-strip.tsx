import Image from "next/image";
import { Marquee } from "../components/magic-ui/marquee";
const Images = [
  {
    id: `1`,
    jobTitle: "A Person",
    jobDescription: "Motion Project",
    img: "/images/landing/mf.png",
  },
  {
    id: `2`,
    jobTitle: "Nike",
    jobDescription: "Video project",
    img: "/images/landing/pic-1.jpg",
  },
];

const firstRow = Images;

const ReviewCard = ({
  img,
  jobDescription,
  jobTitle,
  id,
}: {
  img: string;
  jobDescription: string;
  jobTitle: string;
  id: string;
}) => {
  return (
    <div key={id} className="flex items-center gap-4 p-4 ">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="relative w-16 h-16 shrink-0">
          <Image
            sizes="64px"
            fill
            src={img}
            alt={jobDescription}
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-bold sm:text-base">
            {jobTitle}
          </span>
          <span className="truncate text-xs text-muted-foreground sm:text-sm">
            {jobDescription}
          </span>
        </div>
      </div>
    </div>
  );
};

export function CollaborationStrip() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mx-auto mt-24 md:mt-40">
      <Marquee pauseOnHover className="[--duration:50s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.jobTitle} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-black to-transparent" />{" "}
    </div>
  );
}
