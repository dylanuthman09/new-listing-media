import type { Metadata } from "next";
import { Arrow, SiteHeader } from "../../components";
import { business } from "../../site-data";
import ViewportVideo from "./ViewportVideo";

const mediaRoot = "/media/aerial-showcase";

const aerialImages = Array.from({ length: 12 }, (_, index) => ({
  src: `${mediaRoot}/aerial-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `Professional aerial real estate photograph ${index + 1}`,
}));

export const metadata: Metadata = {
  title: "Aerial Photography & Film | New Listing Media",
  description:
    "Luxury aerial photography and cinematic drone films for homes, land, and commercial properties across Greater Houston.",
  openGraph: {
    title: "Aerial Photography & Film | New Listing Media",
    description: "Elevated property media that adds scale, context, and a stronger sense of place.",
    images: [{ url: `${mediaRoot}/aerial-01.jpg`, width: 1920, height: 1280, alt: "Aerial property photography by New Listing Media" }],
  },
};

function AerialFigure({ index, className = "" }: { index: number; className?: string }) {
  const image = aerialImages[index - 1];
  return (
    <figure className={`aerial-portfolio-frame ${className}`}>
      <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
      <figcaption><span>{String(index).padStart(2, "0")}</span> Aerial study</figcaption>
    </figure>
  );
}

export default function AerialPhotographyFilmPage() {
  return (
    <main className="aerial-portfolio-page">
      <section className="aerial-portfolio-hero">
        <SiteHeader overlay cinematic />
        <ViewportVideo
          className="aerial-portfolio-hero__video"
          src={`${mediaRoot}/aerial-film-02.mp4`}
          poster={aerialImages[0].src}
          label="Cinematic aerial film of Houston-area properties"
        />
        <div className="aerial-portfolio-hero__veil" />
        <div className="aerial-portfolio-hero__content">
          <p>Aerial Photography &amp; Film · Greater Houston</p>
          <h1>See the property. Understand the place.</h1>
          <div className="aerial-portfolio-hero__footer">
            <span>Homes · Land · Commercial</span>
            <span>Films play automatically in view</span>
          </div>
        </div>
      </section>

      <section className="aerial-portfolio-intro">
        <p className="aerial-portfolio-kicker">A higher perspective</p>
        <div>
          <h2>Scale, setting, and possibility in a single frame.</h2>
          <p>
            Aerial imagery places a property in context. It reveals the land, the neighborhood,
            and the features that ground-level photography cannot fully communicate.
          </p>
        </div>
      </section>

      <section className="aerial-portfolio-gallery" aria-labelledby="residential-aerial-title">
        <header className="aerial-portfolio-section-head">
          <span>01</span>
          <h2 id="residential-aerial-title">The complete property story.</h2>
          <p>Wide establishing views and precise overhead compositions make location and scale immediately clear.</p>
        </header>
        <div className="aerial-portfolio-grid aerial-portfolio-grid--opening">
          <AerialFigure index={1} className="aerial-portfolio-span-8" />
          <AerialFigure index={2} className="aerial-portfolio-span-4" />
          <AerialFigure index={4} className="aerial-portfolio-span-5" />
          <AerialFigure index={5} className="aerial-portfolio-span-7" />
        </div>
      </section>

      <section className="aerial-portfolio-film">
        <div className="aerial-portfolio-film__head">
          <div><span>Film 01</span><h2>Movement reveals what stills cannot.</h2></div>
          <p>The film begins automatically when it enters the screen and pauses after it leaves.</p>
        </div>
        <ViewportVideo
          className="aerial-portfolio-film__video"
          src={`${mediaRoot}/aerial-film-01.mp4`}
          poster={aerialImages[3].src}
          label="Aerial property film featuring homes and land"
        />
        <div className="aerial-portfolio-film__caption"><span>Property film</span><span>Autoplay · Muted</span></div>
      </section>

      <section className="aerial-portfolio-context">
        <div className="aerial-portfolio-context__intro">
          <p className="aerial-portfolio-kicker">Context &amp; planning</p>
          <h2>Useful perspective, beautifully presented.</h2>
          <p>Show amenities, site relationships, development context, and the boundaries that help viewers understand the opportunity.</p>
        </div>
        <div className="aerial-portfolio-grid aerial-portfolio-grid--context">
          <AerialFigure index={6} className="aerial-portfolio-span-7" />
          <AerialFigure index={7} className="aerial-portfolio-span-5" />
          <AerialFigure index={8} className="aerial-portfolio-span-5" />
          <AerialFigure index={9} className="aerial-portfolio-span-7" />
        </div>
      </section>

      <section className="aerial-portfolio-second-film">
        <div className="aerial-portfolio-second-film__copy">
          <p className="aerial-portfolio-kicker">Film 02</p>
          <h2>A cinematic sense of arrival.</h2>
          <p>Fluid drone movement builds a clear visual journey from the surrounding area to the property itself.</p>
        </div>
        <ViewportVideo
          className="aerial-portfolio-second-film__video"
          src={`${mediaRoot}/aerial-film-02.mp4`}
          poster={aerialImages[9].src}
          label="Cinematic drone film showing a property arrival"
        />
      </section>

      <section className="aerial-portfolio-gallery aerial-portfolio-gallery--closing">
        <header className="aerial-portfolio-section-head">
          <span>02</span>
          <h2>From the front elevation to the wider neighborhood.</h2>
          <p>Every altitude has a purpose: establish the home, reveal its amenities, and connect it to the community around it.</p>
        </header>
        <div className="aerial-portfolio-grid aerial-portfolio-grid--closing">
          <AerialFigure index={10} className="aerial-portfolio-span-7" />
          <AerialFigure index={11} className="aerial-portfolio-span-5" />
          <AerialFigure index={12} className="aerial-portfolio-span-8" />
          <AerialFigure index={3} className="aerial-portfolio-span-4" />
        </div>
      </section>

      <section className="aerial-portfolio-cta">
        <p className="aerial-portfolio-kicker">Elevate the next listing</p>
        <h2>Show more than the property. Show its place in the world.</h2>
        <div>
          <p>Aerial photography and film for residential, land, and commercial listings across Greater Houston.</p>
          <a className="button button--gold" href={business.orderUrl}>Order a Shoot <Arrow /></a>
        </div>
      </section>
    </main>
  );
}
