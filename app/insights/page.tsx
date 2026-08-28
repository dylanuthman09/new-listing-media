import Link from "next/link";
import { Arrow, ContactBand, MediaImage, PageHero, SectionHeading, SiteFooter } from "../components";
import { insights } from "../site-data";

export const metadata = {
  title: "Insights | New Listing Media",
  description: "Real estate media preparation and planning guidance from New Listing Media.",
};

export default function InsightsPage() {
  return (
    <>
      <main id="main-content">
        <PageHero
          title="Better-prepared listings start before the shoot."
          copy="Practical guidance for agents, sellers, developers, and property owners."
          image="/media/residential-exterior.webp"
        />
        <section className="section-shell section-pad">
          <SectionHeading
            title="Real estate media, explained clearly."
            copy="Useful preparation and creative direction without camera jargon."
          />
          <div className="insight-grid insight-grid--large">
            {insights.map((item) => (
              <Link className="insight-card" href={item.href} key={item.title}>
                <MediaImage src={item.image} alt="" width={2000} height={1333} sizes="(max-width: 780px) 100vw, 50vw" loading="lazy" />
                <div><span>{item.date}</span><h3>{item.title}</h3><Arrow /></div>
              </Link>
            ))}
          </div>
        </section>
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
