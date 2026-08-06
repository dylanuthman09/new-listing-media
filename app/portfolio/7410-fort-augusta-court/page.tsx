import Link from "next/link";
import { Arrow, ContactBand, ProjectGrid, SiteFooter, SiteHeader } from "../../components";

export const metadata = {
  title: "7410 Fort Augusta Court | New Listing Media",
  description: "A property film portfolio project by New Listing Media.",
};

export default function ProjectPage() {
  return (
    <>
      <main>
        <section className="project-hero">
          <SiteHeader overlay />
          <img src="/media/interior-living.jpg" alt="7410 Fort Augusta Court property media" />
          <div className="project-hero__overlay">
            <span className="media-chip">Property Film</span>
            <h1>7410 Fort<br />Augusta Court</h1>
            <p>Houston Area</p>
          </div>
          <div className="project-hero__thumbs">
            <img src="/media/interior-living.jpg" alt="" />
            <img src="/media/residential-exterior.jpg" alt="" />
            <img src="/media/aerial-community.jpg" alt="" />
          </div>
        </section>

        <section className="project-summary section-shell section-pad">
          <div>
            <p className="eyebrow">Project overview</p>
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
          <img src="/media/residential-exterior.jpg" alt="Residential property exterior" />
          <img src="/media/interior-living.jpg" alt="Professionally photographed living space" />
          <img src="/media/aerial-community.jpg" alt="Aerial property context" />
          <img src="/media/exterior-twilight.jpg" alt="Twilight exterior" />
        </section>

        <section className="section-shell section-pad section-pad--topless">
          <div className="section-heading">
            <div><p className="eyebrow">Keep exploring</p><h2>Related work.</h2></div>
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
