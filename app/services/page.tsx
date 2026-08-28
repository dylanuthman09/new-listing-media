import Link from "next/link";
import { Arrow, ContactBand, MediaImage, PageHero, SectionHeading, SiteFooter } from "../components";
import { services } from "../site-data";

export const metadata = {
  title: "Services | New Listing Media",
  description: "Real estate photography, videography, and aerial media in the Houston area.",
};

export default function ServicesPage() {
  return (
    <>
      <main id="main-content">
        <PageHero
          title="One property. A complete visual package."
          copy="Professional photography, cinematic video, and aerial imagery produced by one experienced team."
          image="/media/aerial-estate.webp"
        />
        <section className="section-shell section-pad">
          <SectionHeading
            title="Media designed to move with the listing."
            copy="Choose a focused service or coordinate multiple formats for a consistent launch."
          />
          <div className="service-detail-list">
            {services.map((service) => (
              <article className="service-detail" key={service.title}>
                <div className="service-detail__copy"><h2>{service.title}</h2><p>{service.copy}</p><a href="/contact" className="text-link">Ask about this service <Arrow /></a></div>
                <MediaImage src={service.image} alt="" width={2000} height={1333} sizes="(max-width: 780px) 100vw, 42vw" loading="lazy" />
              </article>
            ))}
          </div>
        </section>
        <section className="dark-section section-shell">
          <div>
            <h2>Simple from order to delivery.</h2>
          </div>
          <div className="process-grid">
            <article><h3>Order</h3><p>Select services through the client ordering portal.</p></article>
            <article><h3>Confirm</h3><p>Coordinate access, timing, and the needs of the listing.</p></article>
            <article><h3>Capture</h3><p>The team photographs and films with a consistent visual approach.</p></article>
            <article><h3>Deliver</h3><p>Receive professionally processed media ready for your marketing.</p></article>
          </div>
          <Link className="button button--gold" href="/contact">Plan Your Shoot <Arrow /></Link>
        </section>
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
