import { ContactBand, PageHero, ProjectGrid, SectionHeading, SiteFooter } from "../components";

export const metadata = {
  title: "Portfolio | New Listing Media",
  description: "Explore real estate photography, property films, and aerial media from New Listing Media.",
};

export default function GalleryPage() {
  return (
    <>
      <main id="main-content">
        <PageHero
          title="Work that earns the second look."
          copy="Property photography, film, and aerial media created across the Houston area."
          image="/media/hero-aerial.webp"
        />
        <section className="section-shell section-pad">
          <SectionHeading
            title="Every property has a strongest angle."
            copy="A growing collection of listing media, from quiet interiors to wide aerial context."
          />
          <p className="filter-label">Showing all work: Photography, Property Film, and Aerial.</p>
          <ProjectGrid />
        </section>
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
