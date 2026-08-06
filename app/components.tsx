import Link from "next/link";
import { business, projects } from "./site-data";

export function Arrow({ direction = "right" }: { direction?: "right" | "left" }) {
  return <span aria-hidden="true">{direction === "right" ? "↗" : "↙"}</span>;
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link className="logo" href="/" aria-label="New Listing Media home">
      <img
        src={light ? "/media/logo-light.png" : "/media/logo-dark.png"}
        alt="New Listing Media"
      />
    </Link>
  );
}

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  return (
    <header className={`site-header ${overlay ? "site-header--overlay" : ""}`}>
      <Logo light={overlay} />
      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link href="/gallery">Portfolio</Link>
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/insights">Insights</Link>
      </nav>
      <div className="header-actions">
        <a className="text-link header-order" href={business.orderUrl}>
          Order a Shoot <Arrow />
        </a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span></span><span></span></summary>
          <div className="mobile-menu__panel">
            <div className="mobile-menu__top"><Logo light /><span>Menu</span></div>
            <nav aria-label="Mobile navigation">
              <Link href="/">Home</Link>
              <Link href="/gallery">Portfolio</Link>
              <Link href="/services">Services</Link>
              <Link href="/about">About</Link>
              <Link href="/insights">Insights</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <div className="mobile-menu__footer">
              <a href={business.orderUrl} className="button button--gold">Order a Shoot</a>
              <a href={business.phoneHref}>{business.phoneDisplay}</a>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {copy ? <p className="section-heading__copy">{copy}</p> : null}
    </div>
  );
}

export function ProjectGrid({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? projects.slice(0, limit) : projects;
  return (
    <div className="project-grid">
      {items.map((project) => {
        const external = project.href.startsWith("http");
        const content = (
          <>
            <div className="project-card__image">
              <img src={project.image} alt={`${project.title} portfolio`} />
              <span className="media-chip">{project.category}</span>
              <span className="project-card__view">View Project <Arrow /></span>
            </div>
            <div className="project-card__meta">
              <div><h3>{project.title}</h3><p>{project.location}</p></div>
              <Arrow />
            </div>
          </>
        );
        return external ? (
          <a className="project-card" href={project.href} key={project.title} target="_blank" rel="noreferrer">{content}</a>
        ) : (
          <Link className="project-card" href={project.href} key={project.title}>{content}</Link>
        );
      })}
    </div>
  );
}

export function ContactBand() {
  return (
    <section className="contact-band section-shell">
      <div className="contact-band__image">
        <div>
          <p className="eyebrow eyebrow--light">Have a property in mind?</p>
          <h2>Let&apos;s make the first impression count.</h2>
          <p>Tell us where and when. We&apos;ll help you choose the right media for the listing.</p>
        </div>
        <div className="contact-band__actions">
          <a className="button button--gold" href={business.orderUrl}>Order a Shoot <Arrow /></a>
          <Link className="button button--glass" href="/contact">Talk with the Team</Link>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__image">
        <div className="site-footer__lead">
          <Logo light />
          <h2>Stay ready for the next listing.</h2>
          <p>Photography, video, and aerial media across the Houston area.</p>
          <a className="button button--gold" href={business.orderUrl}>Order a Shoot <Arrow /></a>
        </div>
        <div className="site-footer__links">
          <div><p className="footer-label">Pages</p><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/gallery">Portfolio</Link><Link href="/insights">Insights</Link></div>
          <div><p className="footer-label">Services</p><Link href="/services">Photography</Link><Link href="/services">Videography</Link><Link href="/services">Aerial</Link><a href={business.orderUrl}>Order</a></div>
          <div><p className="footer-label">Contact</p><a href={business.phoneHref}>{business.phoneDisplay}</a><a href={`mailto:${business.email}`}>Email Us</a><a href={business.instagram}>Instagram</a><a href={business.facebook}>Facebook</a></div>
        </div>
        <div className="site-footer__bottom">
          <span>© 2026 New Listing Media</span>
          <span>Houston, Texas</span>
          <Link href="/contact">Privacy &amp; contact</Link>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  image: string;
}) {
  return (
    <section className="page-hero" style={{ backgroundImage: `linear-gradient(180deg, rgba(12,16,13,.18), rgba(12,16,13,.62)), url("${image}")` }}>
      <SiteHeader overlay />
      <div className="page-hero__content">
        <p className="eyebrow eyebrow--light">{eyebrow}</p>
        <h1>{title}</h1>
        {copy ? <p>{copy}</p> : null}
      </div>
    </section>
  );
}
