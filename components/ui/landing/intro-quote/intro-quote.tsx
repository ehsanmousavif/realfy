import Image from "next/image";

export default function TextWithImages() {
  return (
    <section className="text-white mt-30 flex flex-col items-center justify-center relative">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-5xl font-bold leading-[1.4] md:leading-[1.3] tracking-tight">
          I help
          <div className="inline-block mx-2 align-middle">
            <Image
              width={100}
              height={80}
              src="/images/landing/short-1.webp"
              alt="creative work"
              className="object-cover relative md:absolute top-0 rotate-0 md:-rotate-8 w-14 h-10 md:w-40 md:h-20 rounded-xl"
            />
          </div>
          brands and creators turn ideas into clear, engaging
          <span className="inline-block mx-2 align-middle">
            <div className="relative w-12 h-8 md:w-20 md:h-12 rounded-lg overflow-hidden border border-white/10">
              <Image
                fill
                src="/images/landing/pic-2.webp"
                alt="video content"
                className="object-cover w-full h-full"
              />
            </div>
          </span>
          video content that
          <span className="inline-block mx-2 align-middle">
            <div className="relative w-12 h-8 md:w-20 md:h-12 rounded-lg overflow-hidden border border-white/10">
              <Image
                fill
                src="/images/landing/pic-3.webp"
                alt="results"
                className="object-cover w-full h-full"
              />
            </div>
          </span>
          actually works.
        </h2>
      </div>
    </section>
  );
}
