import { Marquee } from "../../../manual/marquee";
import Image from "next/image";

type Props = {
  images: string[];
};

export function Testimonials({ images }: Props) {
  const firstRow = images.slice(0, Math.ceil(images.length / 2));
  const secondRow = images.slice(Math.ceil(images.length / 2));
  const treeRow = images.slice(Math.ceil(images.length / 2));

  return (
    <div className="relative flex max-w-4xl w-full h-120 flex-row gap-2 items-stretch justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        <div className="flex flex-col gap-2">
          {firstRow.map((x) => (
            <div
              className="relative md:w-60 w-40 cursor-pointer overflow-hidden"
              key={x}
            >
              <Image
                src={x}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-full  rounded-xl"
              />{" "}
            </div>
          ))}
        </div>
      </Marquee>

      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        <div className="flex flex-col gap-2">
          {secondRow.map((x) => (
            <div
              className="relative md:w-60 w-40 cursor-pointer overflow-hidden"
              key={x}
            >
              <Image
                src={x}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-full  rounded-xl"
              />{" "}
            </div>
          ))}
        </div>
      </Marquee>
      <Marquee
        pauseOnHover
        vertical
        className="[--duration:20s] hidden md:block"
      >
        <div className="flex flex-col gap-2">
          {treeRow.map((x) => (
            <div
              className="relative md:w-60 w-40 cursor-pointer overflow-hidden"
              key={x}
            >
              <Image
                src={x}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-full  rounded-xl"
              />{" "}
            </div>
          ))}
        </div>
      </Marquee>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/5 bg-gradient-to-b from-black" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-black" />
    </div>
  );
}
