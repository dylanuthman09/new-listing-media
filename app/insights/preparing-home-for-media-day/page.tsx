import Link from "next/link";
import { Arrow, ContactBand, SiteFooter, SiteHeader } from "../../components";

export const metadata = {
  title: "How to Prepare a Home for Media Day | New Listing Media",
  description: "A practical property preparation guide for real estate photography and video.",
};

export default function ArticlePage() {
  return (
    <>
      <main>
        <section className="article-hero">
          <SiteHeader overlay />
          <img src="/media/interior-living.jpg" alt="Prepared living space ready for real estate media" />
          <div><p className="eyebrow eyebrow--light">Seller Guide · 6 min read</p><h1>How to Prepare a Home for Media Day</h1></div>
        </section>
        <article className="article-body section-shell">
          <Link className="back-link" href="/insights">← Back to insights</Link>
          <p className="article-lede">The strongest listing media begins with a property that is ready to be seen. A thoughtful reset helps photography and video communicate space, light, and flow without avoidable distractions.</p>
          <h2>Start with what the camera sees first.</h2>
          <p>Clear counters, remove personal items, straighten furniture, and reduce small objects that interrupt clean architectural lines. The goal is not to make a home feel empty—it is to let buyers understand the space.</p>
          <h2>Let every light source work together.</h2>
          <p>Replace burned-out bulbs, use matching color temperatures where possible, open blinds, and clean windows and mirrors. Your media team will decide which practical lights support the final image.</p>
          <figure><img src="/media/residential-exterior.jpg" alt="Residential exterior prepared for a media shoot" /><figcaption>Exterior preparation matters: clear vehicles, bins, hoses, and temporary items from primary views.</figcaption></figure>
          <h2>Prepare for movement, not only still frames.</h2>
          <p>Video reveals transitions between rooms. Keep pathways open, check doors, and think about how someone enters and moves through the property. If the home is occupied, create a plan for people and pets during the shoot.</p>
          <h2>Give the exterior the same attention.</h2>
          <p>Move vehicles, bins, hoses, and temporary signs. Sweep entries, arrange outdoor furniture, and turn on landscape or pool features when relevant.</p>
          <div className="article-callout"><p className="eyebrow">Before the appointment</p><h3>Confirm access, occupancy, requested services, and any features that must be photographed.</h3></div>
          <p>Questions about a specific property? New Listing Media can help you choose the right combination of photography, video, and aerial coverage before the appointment.</p>
          <Link className="button button--dark" href="/contact">Talk with the Team <Arrow /></Link>
        </article>
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
