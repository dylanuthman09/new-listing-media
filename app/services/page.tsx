import { SiteFooter, SiteHeader } from "../components";
import { servicePackages, serviceRates } from "../site-data";

export const metadata = {
  title: "Services | New Listing Media",
  description: "Real estate photography, videography, and aerial media in the Houston area.",
};

export default function ServicesPage() {
  return (
    <>
      <main>
        <SiteHeader />
        <section className="section-shell section-pad pricing-section" id="pricing">
          <div className="services-heading">
            <div>
              <p className="eyebrow">Services &amp; packages</p>
              <h1>Choose exactly what your listing needs.</h1>
            </div>
            <p className="section-heading__copy">Focused services and complete packages for photography, video, aerial coverage, and property marketing.</p>
          </div>
          <div className="pricing-split">
            {([
              ["Aerials", serviceRates.aerials],
              ["Videos", serviceRates.videos],
            ] as const).map(([title, items]) => (
              <article className="rate-card" key={title}>
                <p className="eyebrow">{title}</p>
                <div className="rate-list">
                  {items.map((item) => <div className="rate-item rate-item--service" key={item.label}><span>{item.label}</span></div>)}
                </div>
              </article>
            ))}
          </div>
          <div className="package-grid">
            {servicePackages.map((pkg, index) => (
              <article className={`package-card ${index === 1 ? "package-card--featured" : ""}`} key={pkg.name}>
                <div className="package-card__top"><p className="eyebrow">{pkg.name}</p></div>
                <ul>
                  {pkg.features.map((feature) => <li key={feature.label}>{feature.href ? <a href={feature.href} target="_blank" rel="noreferrer">{feature.label} ↗</a> : feature.label}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <article className="rate-card rate-card--additional">
            <p className="eyebrow">Additional services</p>
            <div className="rate-list rate-list--additional">
              {serviceRates.additional.map((item) => <div className="rate-item rate-item--service" key={item.label}><span>{item.label}</span></div>)}
            </div>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
