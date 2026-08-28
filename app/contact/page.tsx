import { Arrow, MediaImage, SiteFooter, SiteHeader } from "../components";
import { business } from "../site-data";

export const metadata = {
  title: "Contact | New Listing Media",
  description: "Contact New Listing Media or order a real estate media shoot in the Houston area.",
};

export default function ContactPage() {
  return (
    <>
      <main id="main-content">
        <SiteHeader />
        <section className="contact-page section-shell">
          <div className="contact-page__intro">
            <h1>Bring us the next listing.</h1>
            <p>Order through the client portal for the fastest path to scheduling, or contact the team if you need help choosing services.</p>
            <div className="contact-direct">
              <a href={business.phoneHref}><span>Call</span><strong>{business.phoneDisplay}</strong><Arrow /></a>
              <a href={`mailto:${business.email}`}><span>Email</span><strong>{business.email}</strong><Arrow /></a>
            </div>
          </div>
          <div className="booking-card">
            <h2>Use the New Listing Media order portal.</h2>
            <p>Choose your services, property, and preferred timing through the existing client system.</p>
            <a className="button button--gold button--large" href={business.orderUrl}>Order a Shoot <Arrow /></a>
            <a className="button button--outline button--large" href={business.loginUrl}>Client Login</a>
            <p className="booking-card__note">Weekend availability is offered. Contact the team to confirm the property address and timing.</p>
          </div>
        </section>
        <section className="contact-image section-shell"><MediaImage src="/media/exterior-twilight.webp" alt="Twilight property photography by New Listing Media" width={2000} height={1333} sizes="100vw" loading="lazy" /></section>
      </main>
      <SiteFooter />
    </>
  );
}
