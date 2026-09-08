import { SectionHeading, SiteFooter, SiteHeader } from "../components";
import VirtualStagingShowcase from "../VirtualStagingShowcase";

export const metadata = {
  title: "Portfolio | New Listing Media",
  description: "Explore real estate photography, property films, and aerial media from New Listing Media.",
};

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main className="gallery-page">
        <section className="aerial-showcase section-shell" id="aerial-work">
          <div className="aerial-showcase__heading">
            <p className="eyebrow eyebrow--light">Aerial motion</p>
            <h2>Perspective that reveals the whole property.</h2>
            <p>Drone movement adds scale, context, and a sense of arrival that ground-level coverage cannot match.</p>
          </div>
          <div className="aerial-film-grid">
            <article className="aerial-film">
              <video controls playsInline preload="metadata" poster="/media/aerial-property-reveal-poster.jpg" aria-label="Aerial property reveal">
                <source src="/media/aerial-property-reveal.mp4" type="video/mp4" />
              </video>
              <div><span>01</span><h3>Property Reveal</h3><p>A concise approach through the landscape and into the property.</p></div>
            </article>
            <article className="aerial-film">
              <video controls playsInline preload="metadata" poster="/media/aerial-land-showcase-poster.jpg" aria-label="Aerial land showcase">
                <source src="/media/aerial-land-showcase.mp4" type="video/mp4" />
              </video>
              <div><span>02</span><h3>Land Showcase</h3><p>Wide-area coverage that communicates acreage, access, and surrounding context.</p></div>
            </article>
          </div>
        </section>

        <section className="section-shell section-pad aerial-stills-section" id="aerial-stills">
          <SectionHeading
            eyebrow="Aerial photography"
            title="A wider view of every place."
            copy="Aerial stills that add scale, context, and a clear sense of the property’s setting."
          />
          <div className="aerial-still-grid" aria-label="Aerial photography stills">
            {Array.from({ length: 12 }, (_, index) => {
              const number = String(index + 1).padStart(2, "0");
              return <img key={number} src={`/media/aerial-showcase/aerial-${number}.jpg`} alt={`Aerial photography still ${index + 1}`} loading="lazy" />;
            })}
          </div>
        </section>

        {/* Portfolio videos are kept together so the gallery can showcase motion media alongside stills. */}
        <section className="section-shell section-pad portfolio-video-showcase" id="portfolio-videos">
          <p className="eyebrow portfolio-video-label">Video portfolio</p>
          <div className="portfolio-video-grid">
            <article className="portfolio-video-card">
              <div className="portfolio-video-card__media"><video controls playsInline preload="metadata" aria-label="Instagram reel for 5906 South Royal Point Drive"><source src="/media/portfolio-videos/instagram-reel-5906-s-royal-point.mp4" type="video/mp4" /></video></div>
              <div><p className="eyebrow">Social media</p><h3>Instagram Reel</h3></div>
            </article>
            <article className="portfolio-video-card">
              <div className="portfolio-video-card__media"><video controls playsInline preload="metadata" aria-label="Mobile website walkthrough"><source src="/media/portfolio-videos/mobile-website-video.mp4" type="video/mp4" /></video></div>
              <div><p className="eyebrow">Responsive web</p><h3>Mobile Website Walkthrough</h3><p>A property story shaped for smaller screens.</p></div>
            </article>
            <article className="portfolio-video-card portfolio-video-card--wide">
              <div className="portfolio-video-card__media"><video controls playsInline preload="metadata" aria-label="Desktop website walkthrough"><source src="/media/portfolio-videos/desktop-website-video.mp4" type="video/mp4" /></video></div>
              <div><p className="eyebrow">Responsive web</p><h3>Desktop Website Walkthrough</h3><p>A full-screen presentation for listings that deserve room to unfold.</p></div>
            </article>
          </div>
        </section>

        <section className="section-shell section-pad" id="virtual-staging">
          <SectionHeading
            eyebrow="Virtual staging portfolio"
            title="Five rooms. Five clear transformations."
            copy="Explore real before-and-after examples across living, dining, work, recreation, and bedroom spaces. Select a room, then drag the divider."
          />
          <VirtualStagingShowcase />
        </section>

        <section className="twilight-showcase section-shell section-pad" id="twilight-work">
          <SectionHeading
            eyebrow="Twilight photography"
            title="The hour when every light matters."
            copy="A curated collection of exterior portraits balancing glowing interiors, architectural detail, and the color of the evening sky."
          />
          <div className="twilight-grid">
            <figure><img src="/media/twilight-07.jpg" alt="Large brick home photographed at twilight" loading="lazy" /></figure>
            <figure><img src="/media/twilight-01.jpg" alt="Stone and stucco home under a colorful twilight sky" loading="lazy" /></figure>
            <figure><img src="/media/twilight-05.jpg" alt="Landscaped estate entrance photographed at twilight" loading="lazy" /></figure>
            <figure><img src="/media/twilight-02.jpg" alt="Modern townhome exterior at dusk" loading="lazy" /></figure>
            <figure><img src="/media/twilight-06.jpg" alt="White home with a wide lawn at twilight" loading="lazy" /></figure>
            <figure><img src="/media/twilight-03.jpg" alt="Brick home with exterior lights at twilight" loading="lazy" /></figure>
            <figure><img src="/media/twilight-04.jpg" alt="Wooded home exterior photographed in the evening" loading="lazy" /></figure>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
