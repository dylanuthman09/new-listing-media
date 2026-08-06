import { ContactBand, PageHero, SectionHeading, SiteFooter } from "../components";

export const metadata = {
  title: "About | New Listing Media",
  description: "Meet New Listing Media, a Houston-area property photography and video team.",
};

export default function AboutPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="About New Listing Media"
          title="The people behind the properties."
          copy="A production-trained team bringing cinematic discipline to real estate media."
          image="/media/interior-living.jpg"
        />
        <section className="about-story section-shell section-pad">
          <div>
            <p className="eyebrow">Our story</p>
            <h2>Experience built beyond the listing.</h2>
          </div>
          <div className="about-story__copy">
            <p>New Listing Media was built to give Houston-area real estate professionals a more polished, consistent media partner.</p>
            <p>With more than five years of experience, the team brings a background that includes high-profile productions connected to <em>Yellowstone</em>, the Grammys, and the MTV Music Awards. That larger production experience now serves a focused goal: make properties look considered, accurate, and ready for attention.</p>
            <p>Every shoot is approached with professional lighting, careful composition, and an understanding of the schedule behind a live listing.</p>
          </div>
        </section>
        <section className="values-section section-shell">
          <SectionHeading
            eyebrow="Our standards"
            title="Precision without the production drama."
            copy="A smooth experience matters as much as a strong final frame."
          />
          <div className="values-grid">
            <article><span>01</span><h3>Property first</h3><p>Media should feel true to the space while presenting it at its most considered.</p></article>
            <article><span>02</span><h3>Prepared and calm</h3><p>A clear process keeps agents, homeowners, and the production team aligned.</p></article>
            <article><span>03</span><h3>Consistent finish</h3><p>Photography, video, and aerials should look like one visual system.</p></article>
            <article><span>04</span><h3>Built for deadlines</h3><p>Real estate moves quickly, so communication and delivery expectations stay clear.</p></article>
          </div>
        </section>
        <section className="image-break section-shell"><img src="/media/aerial-community.jpg" alt="Aerial property media by New Listing Media" /><div><p className="eyebrow eyebrow--light">Houston and surrounding communities</p><h2>Local context, seen from every angle.</h2></div></section>
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
