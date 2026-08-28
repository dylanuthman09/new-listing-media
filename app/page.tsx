import Link from "next/link";
import {
  Arrow,
  ContactBand,
  MediaImage,
  ProjectGrid,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from "./components";
import { business, faqs, insights, services } from "./site-data";

export default function Home() {
  return (
    <>
      <main id="main-content">
        <section className="home-hero">
          <MediaImage className="home-hero__image" src="/media/hero-aerial.webp" alt="" fill sizes="100vw" priority />
          <SiteHeader overlay />
          <div className="home-hero__content">
            <h1>New Listing<br />Media</h1>
            <p>Photography, video, and aerial imagery crafted to make every listing feel worth seeing.</p>
          </div>
          <div className="hero-order-card">
            <div>
              <p>Ready for your next listing?</p>
              <strong>Book photo, video, or aerial media</strong>
            </div>
            <a href={business.orderUrl} className="button button--gold">Order Now <Arrow /></a>
          </div>
          <a className="hero-scroll" href="#selected-work">Scroll to explore ↓</a>
        </section>

        <section className="section-shell section-pad" id="selected-work">
          <SectionHeading
            title="Properties, presented with purpose."
            copy="A selection of photography and property films created for listings across the Houston area."
          />
          <ProjectGrid limit={6} />
          <div className="center-action"><Link className="button button--gold" href="/gallery">View All Work <Arrow /></Link></div>
        </section>

        <section className="proof-band section-shell">
          <div className="proof-band__media">
            <MediaImage className="proof-band__background" src="/media/exterior-twilight.webp" alt="" fill sizes="100vw" loading="lazy" />
            <div className="proof-band__intro">
              <h2>More than a good shot.</h2>
            </div>
            <div className="proof-band__metrics">
              <div><strong>5+</strong><span>Years of experience</span></div>
              <div><strong>3</strong><span>Core media services</span></div>
              <div><strong>7</strong><span>Days available</span></div>
              <div><strong>1</strong><span>Consistent visual partner</span></div>
            </div>
          </div>
        </section>

        <section className="story-split section-shell section-pad">
          <div className="story-split__copy">
            <h2>Production experience, focused on real estate.</h2>
            <p>New Listing Media brings professionally trained photographers and a cinematic eye to every property. The team&apos;s production background includes work connected to <em>Yellowstone</em>, the Grammys, and the MTV Music Awards.</p>
            <p>That experience translates into calm direction, precise framing, and media designed to help realtors, developers, and homeowners stand apart.</p>
            <div className="button-row"><Link className="button button--dark" href="/about">About the Team <Arrow /></Link><Link className="text-link" href="/services">Explore Services <Arrow /></Link></div>
          </div>
          <div className="story-split__image"><MediaImage src="/media/interior-living.webp" alt="Professionally photographed Houston-area interior" width={4000} height={2667} sizes="(max-width: 780px) 100vw, 50vw" loading="lazy" /></div>
        </section>

        <section className="section-shell section-pad section-pad--topless">
          <SectionHeading
            title="One team. Every essential angle."
            copy="Coordinated property media creates a more consistent listing and a simpler production day."
          />
          <div className="service-grid">
            {services.map((service) => (
              <Link className="service-card" href="/services" key={service.title}>
                <MediaImage src={service.image} alt="" width={2000} height={1333} sizes="(max-width: 780px) 100vw, 33vw" loading="lazy" />
                <div className="service-card__overlay">
                  <div><h3>{service.title}</h3><p>{service.copy}</p></div>
                  <Arrow />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="process-section section-shell section-pad">
          <div className="process-feature">
            <div className="process-feature__image"><MediaImage src="/media/aerial-community.webp" alt="Aerial view from a New Listing Media property project" width={2000} height={1333} sizes="(max-width: 780px) 100vw, 55vw" loading="lazy" /></div>
            <div className="process-feature__quote">
              <h2>Built around the way listings actually move.</h2>
              <p>Fast schedules, changing weather, occupied homes, and agent deadlines all shape a media day. New Listing Media keeps the process straightforward from order to delivery.</p>
              <ol>
                <li>Order your services</li>
                <li>Confirm timing and access</li>
                <li>Capture the property</li>
                <li>Receive finished media</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="section-shell section-pad section-pad--topless">
          <SectionHeading
            title="Better-prepared listings start here."
            copy="Practical guidance for planning a smooth shoot and choosing the right media."
          />
          <div className="insight-grid">
            {insights.map((item) => (
              <Link className="insight-card" href={item.href} key={item.title}>
                <MediaImage src={item.image} alt="" width={2000} height={1333} sizes="(max-width: 780px) 100vw, 25vw" loading="lazy" />
                <div><span>{item.date}</span><h3>{item.title}</h3><Arrow /></div>
              </Link>
            ))}
          </div>
        </section>

        <ContactBand />

        <section className="faq-section section-shell section-pad">
          <div>
            <h2>Frequently asked questions.</h2>
            <p>Need something specific? Call <a href={business.phoneHref}>{business.phoneDisplay}</a> or <Link href="/contact">talk with the team</Link>.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.q}><summary>{faq.q}<span>+</span></summary><p>{faq.a}</p></details>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
