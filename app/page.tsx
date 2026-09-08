import Link from "next/link";
import {
  Arrow,
  ContactBand,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from "./components";
import { business, faqs, insights, services } from "./site-data";
import ScrolledSiteHeader from "./ScrolledSiteHeader";
import VirtualStagingShowcase from "./VirtualStagingShowcase";

export default function Home() {
  return (
    <>
      <main>
        <section className="home-hero">
          <video
            className="home-hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/media/hero-film-poster.jpg"
            aria-hidden="true"
          >
            <source src="/media/hero-film.mp4" type="video/mp4" />
          </video>
          <div className="home-hero__veil" aria-hidden="true" />
          <SiteHeader overlay cinematic />
          <div className="home-hero__content">
            <h1>Premiere Real Estate Photography</h1>
            <p>Serving The Greater Houston Area</p>
            <div className="home-hero__actions" aria-label="Featured services">
              <Link className="hero-pill hero-pill--outline" href="/photography">Photography</Link>
              <a className="hero-pill hero-pill--solid" href={business.orderUrl}>Book Now</a>
              <Link className="hero-pill hero-pill--outline" href="/videography">Videography</Link>
            </div>
          </div>
          <a className="hero-scroll" href="#virtual-staging" aria-label="Scroll to virtual staging"><span></span></a>
        </section>

        <ScrolledSiteHeader />

        <section className="section-shell section-pad" id="virtual-staging">
          <SectionHeading
            eyebrow="Featured virtual staging"
            title="Make Ordinary Rooms Extraordinary With Virtual Staging"
            copy="Explore five real transformations. Choose a room, then drag the vertical line to compare the original photograph with the finished staging."
          />
          <VirtualStagingShowcase compact />
        </section>

        <section className="story-split section-shell section-pad">
          <div className="story-split__copy">
            <h2>Premiere Houston Photographer With Years of Experience</h2>
            <p>Zach Uthman founded New Listing Media in 2024 after working in the industry for several years. His personalized attention to meet each clients special needs, set this boutique agency apart from other larger agencies.</p>
            <p>Zach is a native Houstonian, a graduate of Stratford High School and Baylor University. He majored in Film and Digital Media. Before beginning his career in Real Estate Photography, Zach worked on various productions including Yellowstone, The Grammys, CMAs, MTV Awards, and directed multiple award winning independent films.</p>
            <div className="button-row"><a className="button button--dark story-split__cta" href={business.orderUrl}>Explore Services <Arrow /></a></div>
          </div>
          <div className="story-split__image"><img src="/media/zach-headshot.png" alt="Zach Uthman holding a professional camera" /></div>
        </section>

        <section className="section-shell section-pad section-pad--topless">
          <SectionHeading
            eyebrow="Service offerings"
            title="Customized services that make your listing stand out"
            copy="Coordinated property media creates a more consistent listing and a simpler production day."
          />
          <div className="service-grid">
            {services.map((service) => (
              <Link className="service-card" href={service.href} key={service.number}>
                <img src={service.image} alt="" />
                <div className="service-card__overlay">
                  <span>{service.number}</span>
                  <div><h3>{service.title}</h3><p>{service.copy}</p></div>
                  <Arrow />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="process-section section-shell section-pad">
          <div className="process-feature">
            <div className="process-feature__image"><img src="/media/virtual-staging/staging-3-after.jpg" alt="Polished great room prepared for a real estate listing" /></div>
            <div className="process-feature__quote">
              <p className="eyebrow">A seamless experience</p>
              <h2>Built around the way listings actually move.</h2>
              <p>Fast schedules, changing weather, occupied homes, and agent deadlines all shape a media day. New Listing Media keeps the process straightforward from order to delivery.</p>
              <ol>
                <li><span>01</span>Order your services</li>
                <li><span>02</span>Confirm timing and access</li>
                <li><span>03</span>Capture the property</li>
                <li><span>04</span>Receive finished media</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="section-shell section-pad section-pad--topless">
          <SectionHeading
            eyebrow="Latest insights"
            title="Better-prepared listings start here."
            copy="Practical guidance for planning a smooth shoot and choosing the right media."
          />
          <div className="insight-grid">
            {insights.map((item) => (
              <Link className="insight-card" href={item.href} key={item.title}>
                <img src={item.image} alt="" />
                <div><span>{item.date}</span><h3>{item.title}</h3><Arrow /></div>
              </Link>
            ))}
          </div>
        </section>

        <ContactBand />

        <section className="faq-section section-shell section-pad">
          <div>
            <p className="eyebrow">Common questions</p>
            <h2>Frequently asked questions.</h2>
            <p>Need something specific? Call <a href={business.phoneHref}>{business.phoneDisplay}</a>.</p>
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
