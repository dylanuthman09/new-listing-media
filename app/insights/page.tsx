import Link from "next/link";
import { Arrow, ContactBand, PageHero, SectionHeading, SiteFooter } from "../components";
import { insights } from "../site-data";

export const metadata = {
  title: "Insights | New Listing Media",
  description: "Real estate media preparation and planning guidance from New Listing Media.",
};

export default function InsightsPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Insights"
          title="Better-prepared listings start before the shoot."
          copy="Practical guidance for agents, sellers, developers, and property owners."
          image="/media/residential-exterior.jpg"
        />
        <section className="section-shell section-pad">
          <SectionHeading
            eyebrow="Latest articles"
            title="Real estate media, explained clearly."
            copy="Useful preparation and creative direction without camera jargon."
          />
          <div className="insight-grid insight-grid--large">
            {insights.map((item) => (
              <Link className="insight-card" href={item.href} key={item.title}>
                <img src={item.image} alt="" />
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
