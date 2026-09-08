import { SiteFooter, SiteHeader } from "../components";

export const metadata = {
  title: "Videography | New Listing Media",
  description: "Property films, aerial motion, social reels, and listing website video by New Listing Media.",
};

const videos = [
  {
    title: "Property Reveal",
    src: "/media/aerial-property-reveal.mp4",
    poster: "/media/aerial-property-reveal-poster.jpg",
    format: "wide",
  },
  {
    title: "Land Showcase",
    src: "/media/aerial-land-showcase.mp4",
    poster: "/media/aerial-land-showcase-poster.jpg",
    format: "wide",
  },
  {
    title: "Instagram Reel",
    src: "/media/portfolio-videos/instagram-reel-5906-s-royal-point.mp4",
    format: "vertical",
  },
  {
    title: "Mobile Website",
    src: "/media/portfolio-videos/mobile-website-video.mp4",
    format: "vertical",
  },
  {
    title: "Desktop Website",
    src: "/media/portfolio-videos/desktop-website-video.mp4",
    format: "wide",
  },
];

export default function VideographyPage() {
  return (
    <>
      <SiteHeader />
      <main className="film-showcase-page">
        <section className="film-showcase-list section-shell" aria-label="Video portfolio">
          {videos.map((video, index) => (
            <article className={`film-showcase-card film-showcase-card--${video.format}`} key={video.src}>
              <div className="film-showcase-card__media">
                <video controls playsInline preload="metadata" poster={video.poster} aria-label={video.title}>
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>
              <div className="film-showcase-card__title"><span>{String(index + 1).padStart(2, "0")}</span><h2>{video.title}</h2></div>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
