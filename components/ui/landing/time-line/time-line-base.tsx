interface Props {
  data: {
    title: string;
    description: string;
    id: number;
  }[];
}

export function TimeLineBase({ data }: Props) {
  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="absolute left-0 right-0 top-0 bottom-0 z-10 pointer-events-none">
        <div className="sticky h-[20%] top-0 left-7.5 lg:left-1/2 w-1 bg-linear-to-b from-transparent via-foreground/60 to-emerald-600 lg:-translate-x-1/2 rounded-full" />
      </div>
      <div className="flex flex-col w-full relative z-20">
        {data.map((d, index) => {
          const isEven = d.id % 2 === 0;
          const isLast = index === data.length - 1;

          return (
            <div key={d.id} className="relative flex w-full">
              <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 -translate-x-1/2 flex flex-col items-center w-8">
                <div className="w-8 h-8 rounded-full bg-background border-10 border-foreground/20 shrink-0" />
                {!isLast && <div className="w-0.5 flex-1 bg-foreground/20" />}
              </div>
              <div
                className={`flex w-full ${isLast ? "pb-0" : "pb-20"} min-h-8`}
              >
                <div className="hidden lg:flex w-1/2 pr-16 justify-end pt-1">
                  {!isEven && (
                    <div className="flex flex-row flex-wrap gap-2 max-w-md justify-end items-baseline text-right">
                      <span className="text-xl font-bold tracking-tight whitespace-nowrap">
                        {d.id}. {d.title}
                      </span>
                      <span className="text-sm lg:text-md leading-relaxed font-normal text-foreground/60">
                        {d.description}
                      </span>
                    </div>
                  )}
                </div>
                <div className="hidden lg:flex w-1/2 pl-16 justify-start pt-1">
                  {isEven && (
                    <div className="flex flex-row flex-wrap gap-2 max-w-2xl justify-start items-baseline text-left">
                      <span className="text-xl font-bold tracking-tight whitespace-nowrap">
                        {d.id}. {d.title}
                      </span>
                      <span className="text-sm lg:text-md leading-relaxed text-foreground/50 font-normal">
                        {d.description}
                      </span>
                    </div>
                  )}
                </div>
                <div className="lg:hidden flex w-full pl-16 pr-4 pt-1">
                  <div className="flex flex-row flex-wrap gap-2 text-left items-baseline">
                    <span className="text-lg font-bold whitespace-nowrap">
                      {d.id}. {d.title}
                    </span>
                    <span className="text-md leading-relaxed text-foreground/50 font-normal">
                      {d.description}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
