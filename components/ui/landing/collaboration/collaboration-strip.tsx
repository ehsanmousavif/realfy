import Image from "next/image"
import { Marquee } from "../../marquee"
const reviews = [
  {
    id: `1`,
    jobTitle: "A Person",
    jobDescription: "Motion Project",
    img: "/images/landing/pic-1.jpg",
  },
  {
    id: `2`,
    jobTitle: "Nike",
    jobDescription: "Video project",
    img: "/images/landing/mf.png",
  },
  {
    id: `3`,
    jobTitle: "Nike",
    jobDescription: "Video project",
    img: "/images/landing/mf.png",
  },
  {
    id: `4`,
    jobTitle: "Nike",
    jobDescription: "Video project",
    img: "/images/landing/mf.png",
  },
  {
    id: `5`,
    jobTitle: "Nike",
    jobDescription: "Video project",
    img: "/images/landing/mf.png",
  },
  {
    id: `6`,
    jobTitle: "Nike",
    jobDescription: "Video project",
    img: "/images/landing/mf.png",
  },
  {
    id: `7`,
    jobTitle: "Nike",
    jobDescription: "Video project",
    img: "/images/landing/mf.png",
  },

]

const firstRow = reviews

const ReviewCard = ({
  img,
  jobDescription,
  jobTitle,
  id
}: {
  img: string
  jobDescription: string
  jobTitle: string
  id: string
}) => {
  return (
    <div key={id} className="flex items-center gap-4 p-4 ">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="relative w-16 h-16 shrink-0">
          <Image
            fill
            src={img}
            alt={jobDescription}
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-bold sm:text-base">{jobTitle}</span>
          <span className="truncate text-xs text-muted-foreground sm:text-sm">{jobDescription}</span>
        </div>
      </div>
    </div>
  )
}

export function CollaborationStrip() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mx-auto mt-24 md:mt-40">
      <Marquee pauseOnHover>
        {firstRow.map((review) => (
          <ReviewCard key={review.jobTitle} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}
