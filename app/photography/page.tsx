import { SiteFooter, SiteHeader } from "../components";
import PhotoCarousel from "../PhotoCarousel";

export const metadata = {
  title: "Photography | New Listing Media",
  description: "A curated collection of luxury real estate photography from New Listing Media.",
};

const interiors = Array.from({ length: 5 }, (_, index) => ({
  src: `/media/photography-showcase/interior-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `Luxury real estate interior photograph ${index + 1}`,
}));

const aerials = Array.from({ length: 12 }, (_, index) => ({
  src: `/media/aerial-showcase/aerial-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `Houston-area aerial property photograph ${index + 1}`,
}));

const twilights = Array.from({ length: 7 }, (_, index) => ({
  src: `/media/photography-showcase/twilight-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `Luxury home photographed at twilight ${index + 1}`,
}));

function PhotoCollection({
  number,
  title,
  images,
  dark = false,
}: {
  number: string;
  title: string;
  images: { src: string; alt: string }[];
  dark?: boolean;
}) {
  return (
    <section className={`luxury-photo-collection${dark ? " luxury-photo-collection--dark" : ""}`} id={title.toLowerCase()}>
      <header className="luxury-photo-collection__header section-shell">
        <span>{number}</span>
        <h2>{title}</h2>
      </header>
      <div className="luxury-photo-grid section-shell">
        {images.map((image, index) => (
          <figure key={image.src} className={`luxury-photo-grid__item luxury-photo-grid__item--${index + 1}`}>
            <img src={image.src} alt={image.alt} loading={index > 1 ? "lazy" : undefined} />
          </figure>
        ))}
      </div>
    </section>
  );
}

function CarouselCollection({
  number,
  title,
  images,
}: {
  number: string;
  title: string;
  images: { src: string; alt: string }[];
}) {
  return (
    <section className="luxury-photo-collection luxury-photo-collection--carousel" id={title.toLowerCase()}>
      <header className="luxury-photo-collection__header section-shell">
        <span>{number}</span>
        <h2>{title}</h2>
      </header>
      <PhotoCarousel images={images} label={`${title} photography`} />
    </section>
  );
}

export default function PhotographyPage() {
  return (
    <>
      <main className="luxury-showcase-page">
        <section className="luxury-showcase-hero">
          <SiteHeader overlay cinematic />
          <img src="/media/photography-showcase/twilight-07.jpg" alt="Luxury brick home photographed at twilight" />
          <div className="luxury-showcase-hero__veil" aria-hidden="true" />
          <div className="luxury-showcase-hero__content">
            <p>Selected work</p>
            <h1>Photography.</h1>
            <nav aria-label="Photography collections">
              <a href="#interiors">Interiors</a>
              <a href="#aerial">Aerial</a>
              <a href="#twilight">Twilight</a>
            </nav>
          </div>
        </section>
        <PhotoCollection number="01" title="Interiors" images={interiors} />
        <CarouselCollection number="02" title="Aerial" images={aerials} />
        <CarouselCollection number="03" title="Twilight" images={twilights} />
      </main>
      <SiteFooter />
    </>
  );
}
