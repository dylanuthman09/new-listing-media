import type { Metadata } from "next";
import { Arrow, SiteHeader } from "../../components";
import { business } from "../../site-data";

const mediaRoot = "/media/photography-showcase";

const interiorImages = [
  { src: `${mediaRoot}/interior-01.jpg`, alt: "Professionally photographed recreation room with vaulted ceiling" },
  { src: `${mediaRoot}/interior-02.jpg`, alt: "Professionally photographed home office with warm wood details" },
  { src: `${mediaRoot}/interior-03.jpg`, alt: "Professionally photographed living room with stone fireplace" },
  { src: `${mediaRoot}/interior-04.jpg`, alt: "Professionally photographed dining room filled with natural light" },
  { src: `${mediaRoot}/interior-05.jpg`, alt: "Professionally photographed primary bedroom in a refined neutral palette" },
];

const twilightImages = [
  { src: `${mediaRoot}/twilight-01.jpg`, alt: "Twilight exterior of a modern Houston home" },
  { src: `${mediaRoot}/twilight-02.jpg`, alt: "Twilight exterior of a contemporary two-story home" },
  { src: `${mediaRoot}/twilight-03.jpg`, alt: "Twilight exterior of a brick single-story home" },
  { src: `${mediaRoot}/twilight-04.jpg`, alt: "Twilight exterior of a wooded Texas home" },
  { src: `${mediaRoot}/twilight-05.jpg`, alt: "Twilight exterior of a red-brick estate" },
  { src: `${mediaRoot}/twilight-06.jpg`, alt: "Twilight exterior of a white home with a wide lawn" },
  { src: `${mediaRoot}/twilight-07.jpg`, alt: "Twilight exterior of a stately brick home" },
];

export const metadata: Metadata = {
  title: "Real Estate Photography | New Listing Media",
  description:
    "A portfolio of luxury real estate photography, interiors, and twilight exteriors by New Listing Media in Greater Houston.",
  openGraph: {
    title: "Real Estate Photography | New Listing Media",
    description: "Architecture, atmosphere, and the details that make a property memorable.",
    images: [{ url: `${mediaRoot}/twilight-07.jpg`, width: 1920, height: 1280, alt: "New Listing Media twilight real estate photography" }],
  },
};

export default function RealEstatePhotographyPage() {
  return (
    <main className="photo-showcase-page">
      <section className="photo-showcase-hero">
        <SiteHeader overlay cinematic />
        <img
          className="photo-showcase-hero__image"
          src={twilightImages[6].src}
          alt={twilightImages[6].alt}
          fetchPriority="high"
        />
        <div className="photo-showcase-hero__veil" />
        <div className="photo-showcase-hero__content">
          <p>Real Estate Photography · Greater Houston</p>
          <h1>Every property has a point of view.</h1>
          <div className="photo-showcase-hero__footer">
            <span>Interiors · Exteriors · Twilight</span>
            <a href="#portfolio">View the collection <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <section className="photo-showcase-intro" id="portfolio">
        <p className="photo-showcase-kicker">The approach</p>
        <div>
          <h2>Architecture, atmosphere, and the details that make a home memorable.</h2>
          <p>
            Thoughtful composition and natural color reveal how a property feels—not just how it looks.
            Every frame is finished to give the listing a refined, cohesive presence.
          </p>
        </div>
      </section>

      <section className="photo-showcase-collection photo-showcase-interiors" aria-labelledby="interiors-title">
        <header className="photo-showcase-collection__header">
          <span>01</span>
          <h2 id="interiors-title">Interiors in their best light.</h2>
          <p>Clean lines. Honest color. A sense of space buyers can understand immediately.</p>
        </header>

        <div className="photo-showcase-interior-grid">
          {interiorImages.map((image, index) => (
            <figure className={`photo-showcase-frame photo-showcase-frame--interior-${index + 1}`} key={image.src}>
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
              <figcaption><span>{String(index + 1).padStart(2, "0")}</span> Interior study</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="photo-showcase-twilight" aria-labelledby="twilight-title">
        <div className="photo-showcase-twilight__intro">
          <p className="photo-showcase-kicker">The blue hour</p>
          <h2 id="twilight-title">When the light becomes the story.</h2>
          <p>Twilight photography gives curb appeal a cinematic edge—warm interiors, deep skies, and a first impression built to linger.</p>
        </div>

        <figure className="photo-showcase-frame photo-showcase-twilight__lead">
          <img src={twilightImages[4].src} alt={twilightImages[4].alt} loading="lazy" decoding="async" />
          <figcaption><span>Twilight 05</span> Greater Houston</figcaption>
        </figure>

        <div className="photo-showcase-twilight-grid">
          {[twilightImages[0], twilightImages[1], twilightImages[2]].map((image, index) => (
            <figure className={`photo-showcase-frame photo-showcase-frame--twilight-${index + 1}`} key={image.src}>
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
              <figcaption><span>Twilight {String(index + 1).padStart(2, "0")}</span> Exterior study</figcaption>
            </figure>
          ))}
        </div>

        <figure className="photo-showcase-frame photo-showcase-twilight__wide">
          <img src={twilightImages[3].src} alt={twilightImages[3].alt} loading="lazy" decoding="async" />
          <figcaption><span>Twilight 04</span> Exterior study</figcaption>
        </figure>

        <div className="photo-showcase-twilight__finale">
          {[twilightImages[5], twilightImages[6]].map((image, index) => (
            <figure className="photo-showcase-frame" key={image.src}>
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
              <figcaption><span>Twilight {String(index + 6).padStart(2, "0")}</span> Exterior study</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="photo-showcase-cta">
        <p className="photo-showcase-kicker">Your next listing</p>
        <h2>Make the first impression feel considered.</h2>
        <div>
          <p>Professional real estate photography for agents, builders, and property owners across Greater Houston.</p>
          <a className="button button--gold" href={business.orderUrl}>Order a Shoot <Arrow /></a>
        </div>
      </section>
    </main>
  );
}
