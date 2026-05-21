export function IntroductionVideo() {
  return (
    <div className="w-full aspect-video overflow-hidden rounded-xl relative">
      <iframe
        src="https://www.youtube.com/embed/9s0_YQtbEEY"
        className="w-full h-full rounded-xl"
        title="Introduction video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}