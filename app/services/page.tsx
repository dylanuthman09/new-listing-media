import Link from "next/link";
import { Arrow, ContactBand, PageHero, SectionHeading, SiteFooter } from "../components";
import { services } from "../site-data";

export const metadata = {
  title: "Services | New Listing Media",
  description: "Real estate photography, videography, and aerial media in the Houston area.",
};

export default function ServicesPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Our services"
          title="One property. A complete visual package."
          copy="Professional photography, cinematic video, and aerial imagery produced by one experienced team."
          image="/media/aerial-estate.jpg"
        />
        <section className="section-shell section-pad">
          <SectionHeading
            eyebrow="Core offerings"
            title="Media designed to move with the listing."
            copy="Choose a focused service or coordinate multiple formats for a consistent launch."
          />
          <div className="service-detail-list">
            {services.map((service) => (
              <article className="service-detail" key={service.number}>
                <div className="service-detail__number">{service.number}</div>
                <div className="service-detail__copy"><h2>{service.title}</h2><p>{service.copy}</p><a href="/contact" className="text-link">Ask about this service <Arrow /></a></div>
                <img src={service.image} alt="" />
              </article>
            ))}
          </div>
        </section>
        <section className="dark-section section-shell">
          <div>
            <p className="eyebrow eyebrow--light">The process</p>
            <h2>Simple from order to delivery.</h2>
          </div>
          <div className="process-grid">
            <article><span>01</span><h3>Order</h3><p>Select services through the client ordering portal.</p></article>
            <article><span>02</span><h3>Confirm</h3><p>Coordinate access, timing, and the needs of the listing.</p></article>
            <article><span>03</span><h3>Capture</h3><p>The team photographs and films with a consistent visual approach.</p></article>
            <article><span>04</span><h3>Deliver</h3><p>Receive professionally processed media ready for your marketing.</p></article>
          </div>
          <Link className="button button--gold" href="/contact">Plan Your Shoot <Arrow /></Link>
        </section>
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
