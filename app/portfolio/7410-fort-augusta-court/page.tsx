import Link from "next/link";
import { Arrow, ContactBand, MediaImage, ProjectGrid, SiteFooter, SiteHeader } from "../../components";

export const metadata = {
  title: "7410 Fort Augusta Court | New Listing Media",
  description: "A property film portfolio project by New Listing Media.",
};

export default function ProjectPage() {
  return (
    <>
      <main id="main-content">
        <section className="project-hero">
          <SiteHeader overlay />
          <MediaImage src="/media/interior-living.webp" alt="7410 Fort Augusta Court property media" fill sizes="100vw" priority />
          <div className="project-hero__overlay">
            <span className="media-chip">Property Film</span>
            <h1>7410 Fort<br />Augusta Court</h1>
            <p>Houston Area</p>
          </div>
          <div className="project-hero__thumbs">
            <MediaImage src="/media/interior-living.webp" alt="" width={4000} height={2667} sizes="68px" loading="lazy" />
            <MediaImage src="/media/residential-exterior.webp" alt="" width={2000} height={1337} sizes="68px" loading="lazy" />
            <MediaImage src="/media/aerial-community.webp" alt="" width={2000} height={1333} sizes="68px" loading="lazy" />
          </div>
        </section>

        <section className="project-summary section-shell section-pad">
          <div>
            <h2>A cinematic property tour, built for the listing.</h2>
          </div>
          <div>
            <p>This portfolio project showcases New Listing Media&apos;s real estate videography work. The film uses composed movement and a considered sequence to communicate the property beyond a collection of individual rooms.</p>
            <dl>
              <div><dt>Project</dt><dd>7410 Fort Augusta Court</dd></div>
              <div><dt>Service</dt><dd>Real Estate Videography</dd></div>
              <div><dt>Market</dt><dd>Houston Area</dd></div>
            </dl>
          </div>
        </section>

        <section className="video-feature section-shell">
          <iframe
            src="https://www.youtube.com/embed/l94h0t0ui4A?rel=0"
            title="7410 Fort Augusta Court property film"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </section>

        <section className="gallery-mosaic section-shell section-pad">
          <MediaImage src="/media/residential-exterior.webp" alt="Residential property exterior" width={2000} height={1337} sizes="(max-width: 780px) 100vw, 65vw" loading="lazy" />
          <MediaImage src="/media/interior-living.webp" alt="Professionally photographed living space" width={4000} height={2667} sizes="(max-width: 780px) 100vw, 65vw" loading="lazy" />
          <MediaImage src="/media/aerial-community.webp" alt="Aerial property context" width={2000} height={1333} sizes="(max-width: 780px) 100vw, 65vw" loading="lazy" />
          <MediaImage src="/media/exterior-twilight.webp" alt="Twilight exterior" width={2000} height={1333} sizes="(max-width: 780px) 100vw, 65vw" loading="lazy" />
        </section>

        <section className="section-shell section-pad section-pad--topless">
          <div className="section-heading">
            <div><h2>Related work.</h2></div>
            <Link className="text-link" href="/gallery">View full portfolio <Arrow /></Link>
          </div>
          <ProjectGrid limit={3} />
        </section>
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
