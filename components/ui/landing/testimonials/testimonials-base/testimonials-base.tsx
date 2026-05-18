import Image from "next/image";
import { Marquee } from "../../component/magic-ui/marquee";

type Props = {
  images: string[];
};


export function Testimonials({ images }: Props) {
  const Row = images.slice(0, Math.ceil(images.length / 2));


  return (
    <div className="relative flex max-w-4xl w-full h-120 flex-row md:gap-2 items-stretch justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:20s] hidden md:block">
        <div className="flex flex-col gap-4">
          {Row.map((x) => (
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
      <Marquee pauseOnHover reverse vertical className="[--duration:20s]">
        <div className="flex flex-col gap-4">
          {Row.map((x) => (
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
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        <div className="flex flex-col gap-4">
          {Row.map((x) => (
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
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/5 bg-linear-to-b from-black" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/5 bg-linear-to-t from-black" />
    </div>
  );
}
