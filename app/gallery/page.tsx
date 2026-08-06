import { ContactBand, PageHero, ProjectGrid, SectionHeading, SiteFooter } from "../components";

export const metadata = {
  title: "Portfolio | New Listing Media",
  description: "Explore real estate photography, property films, and aerial media from New Listing Media.",
};

export default function GalleryPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Portfolio"
          title="Work that earns the second look."
          copy="Property photography, film, and aerial media created across the Houston area."
          image="/media/hero-aerial.jpg"
        />
        <section className="section-shell section-pad">
          <SectionHeading
            eyebrow="Selected projects"
            title="Every property has a strongest angle."
            copy="A growing collection of listing media, from quiet interiors to wide aerial context."
          />
          <div className="filter-row" aria-label="Portfolio categories">
            <span className="filter-pill filter-pill--active">All Work</span>
            <span className="filter-pill">Photography</span>
            <span className="filter-pill">Property Film</span>
            <span className="filter-pill">Aerial</span>
          </div>
          <ProjectGrid />
        </section>
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
