import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, SiteFooter, SiteHeader } from "../../components";
import { business } from "../../site-data";

export const metadata: Metadata = {
  title: "How to Prepare Your Home for a Real Estate Media Day | New Listing Media",
  description:
    "A complete Houston real estate photography checklist for preparing every room, exterior area, and specialty service before media day.",
  openGraph: {
    title: "How to Prepare Your Home for a Real Estate Media Day",
    description:
      "A complete room-by-room checklist for polished real estate photography, video, drone media, and more.",
    type: "article",
    images: ["/media/prep-home-social.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Prepare Your Home for a Real Estate Media Day",
    description:
      "A complete room-by-room checklist for polished real estate photography, video, drone media, and more.",
    images: ["/media/prep-home-social.png"],
  },
};

const cleaningChecklist = [
  "Vacuum, sweep, and mop all floors.",
  "Clean windows, mirrors, countertops, and glass doors.",
  "Remove dust from visible furniture and shelving.",
  "Wipe fingerprints from stainless steel appliances.",
  "Clean sinks, faucets, showers, and bathtubs.",
  "Replace stained or heavily worn towels and linens.",
  "Empty trash cans and conceal the containers.",
  "Remove pet hair from furniture, rugs, and floors.",
];

const finalChecklist = [
  "Open curtains and straighten blinds.",
  "Turn on lights and replace burned-out bulbs.",
  "Turn off televisions, monitors, and ceiling fans.",
  "Clear countertops and remove personal information.",
  "Make every bed and close toilet lids.",
  "Secure valuables, medications, and documents.",
  "Remove pets and conceal pet supplies.",
  "Move vehicles away from the property.",
  "Hide trash bins, hoses, tools, and cleaning supplies.",
  "Check the pool, patio, lawn, and front entrance.",
  "Confirm that every room and requested feature is accessible.",
];

const contents = [
  ["why-preparation-matters", "Why preparation matters"],
  ["thorough-cleaning", "Thorough cleaning"],
  ["declutter", "Declutter and depersonalize"],
  ["kitchen", "Kitchen"],
  ["living-dining", "Living and dining"],
  ["bedrooms", "Bedrooms"],
  ["bathrooms", "Bathrooms"],
  ["lighting", "Lighting"],
  ["curb-appeal", "Curb appeal"],
  ["specialty-services", "Specialty services"],
  ["pets-and-access", "Pets and access"],
  ["final-checklist", "Final checklist"],
] as const;

export default function ArticlePage() {
  return (
    <>
      <main className="prep-article-page">
        <SiteHeader />

        <article>
          <header className="prep-article-hero section-shell">
            <div className="prep-article-hero__copy">
              <Link className="prep-back-link" href="/insights">← Back to insights</Link>
              <p className="prep-article-kicker">Seller guide <span>·</span> 10 min read</p>
              <h1>How to Prepare Your Home for a Real Estate Media Day</h1>
              <p className="prep-article-dek">Professional photography and video can shape a buyer’s first impression of your property long before they schedule a showing. Thoughtful preparation allows your home’s architecture, natural light, finishes, and most attractive features to take center stage.</p>
              <div className="prep-article-meta">
                <span>New Listing Media Tx</span>
                <span>Greater Houston Area</span>
              </div>
            </div>
            <figure className="prep-article-hero__media">
              <img src="/media/residential-exterior.jpg" alt="A clean, styled dining room prepared for real estate photography" />
              <figcaption>A polished space lets the property—not the clutter—lead the frame.</figcaption>
            </figure>
          </header>

          <div className="prep-article-layout section-shell">
            <aside className="prep-article-toc" aria-label="Article sections">
              <p>In this guide</p>
              <nav>
                {contents.map(([id, label], index) => (
                  <a href={`#${id}`} key={id}><span>{String(index + 1).padStart(2, "0")}</span>{label}</a>
                ))}
              </nav>
            </aside>

            <div className="prep-article-content">
              <section className="prep-article-intro" aria-label="Introduction">
                <p>A real estate media day may include more than traditional listing photos. Your appointment could involve cinematic video, drone photography, a Zillow 3D Home tour, floor plans, twilight photography, virtual staging, or a social media reel. Because each service captures the property differently, preparing every visible space is essential.</p>
                <p>At New Listing Media Tx, we help real estate professionals and homeowners throughout the Greater Houston Area present properties with polished, luxury-focused media. Use this complete real estate photography checklist to make sure your home is ready when our team arrives.</p>
              </section>

              <section className="prep-article-section" id="why-preparation-matters">
                <p className="prep-section-number">01</p>
                <h2>Why Preparing for Real Estate Photography Matters</h2>
                <p>Even the most sophisticated camera cannot compensate for excessive clutter, unfinished cleaning, or distracting personal items. Preparation helps create images that feel spacious, refined, and inviting.</p>
                <p>A properly prepared property also allows the photographer to focus on composition, lighting, and storytelling instead of waiting for rooms to be cleaned or belongings to be moved. This results in a more efficient appointment and a consistent visual presentation across photography, video, 3D tours, and social media content.</p>
                <aside className="prep-article-note">
                  <span>Keep in mind</span>
                  <p>As a general rule, the property should be completely photo-ready before the scheduled appointment. Photographers may make small adjustments, but they should not be expected to clean, rearrange furniture, make beds, or move personal belongings.</p>
                </aside>
              </section>

              <section className="prep-article-section" id="thorough-cleaning">
                <p className="prep-section-number">02</p>
                <h2>Start With a Thorough Cleaning</h2>
                <p>Luxury presentation begins with cleanliness. Clean the home as carefully as you would for an important showing, paying special attention to surfaces that catch light or appear prominently on camera.</p>
                <p>Before your real estate media day:</p>
                <ul className="prep-checklist">
                  {cleaningChecklist.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <p>Bright photography can make dust, streaks, and smudges more noticeable. Clean windows are especially important because they improve the view and allow natural light to enter the room.</p>
              </section>

              <section className="prep-article-section" id="declutter">
                <p className="prep-section-number">03</p>
                <h2>Declutter and Depersonalize the Home</h2>
                <p>The goal is not to remove all personality. It is to create a calm, aspirational environment in which prospective buyers can imagine their own lives.</p>
                <p>Remove excess items from countertops, tables, floors, and open shelving. Hide family photographs, calendars, mail, paperwork, school schedules, and anything displaying private information. Prescription medications, jewelry, financial documents, spare keys, and other valuables should be secured before the media team arrives.</p>
                <p>Video and 3D tours require particularly careful preparation. Unlike still photography, these services create a continuous view of the property, making it more difficult to avoid clutter or unfinished areas.</p>
                <p>When possible, store removed items inside cabinets, drawers, or a designated space that will not be photographed. Avoid placing everything in a garage unless you have confirmed that the garage will not be included in the listing.</p>
              </section>

              <figure className="prep-article-media">
                <img src="/media/interior-living.jpg" alt="A clean and carefully arranged covered patio overlooking the water" />
                <figcaption>Exterior living areas need the same thoughtful reset as interior rooms.</figcaption>
              </figure>

              <section className="prep-article-section" id="kitchen">
                <p className="prep-section-number">04</p>
                <h2>Prepare the Kitchen</h2>
                <p>The kitchen is often one of the most important rooms in a real estate listing. A clean, simplified kitchen will feel larger and allow countertops, cabinetry, appliances, and finishes to stand out.</p>
                <p>Remove dishes, drying racks, sponges, cleaning products, paper towels, and countertop appliances that are not essential to the design. Clear magnets, photographs, and papers from the refrigerator. Conceal trash cans, pet bowls, food containers, and floor mats that make the room feel busy.</p>
                <p>A small decorative arrangement—such as fresh flowers, a tasteful bowl of fruit, or a single cookbook—can add warmth. Keep styling minimal so it supports the space instead of becoming a distraction.</p>
              </section>

              <section className="prep-article-section" id="living-dining">
                <p className="prep-section-number">05</p>
                <h2>Style the Living and Dining Areas</h2>
                <p>Arrange furniture to create open walkways and showcase the size and function of each room. Remove unnecessary chairs, oversized toys, exercise equipment, remote controls, charging cables, and personal collections.</p>
                <p>Fluff sofa cushions, straighten throw pillows, and neatly fold blankets. Clear the dining table or add one simple centerpiece. If the room has a fireplace, remove excessive décor and clean the surrounding area.</p>
                <p>Turn televisions and computer monitors off. Dark screens generally look cleaner and prevent unwanted reflections from appearing in photographs and video.</p>
              </section>

              <section className="prep-article-section" id="bedrooms">
                <p className="prep-section-number">06</p>
                <h2>Prepare the Bedrooms</h2>
                <p>Every bed should be neatly made with smooth, coordinated bedding. Straighten pillows, tuck in sheets, and remove clothing, laundry baskets, tissue boxes, charging cables, and personal items from nightstands.</p>
                <p>Clear the floor and reduce the number of objects on dressers. In children’s rooms, organize toys and remove excessive wall or door decorations when practical. Closets should also be organized if they are a significant selling feature or may appear during a video or 3D tour.</p>
                <p>Hotel-inspired simplicity works especially well for luxury real estate marketing: clean bedding, balanced pillows, clear surfaces, and a few intentional decorative details.</p>
              </section>

              <section className="prep-article-section" id="bathrooms">
                <p className="prep-section-number">07</p>
                <h2>Refresh the Bathrooms</h2>
                <p>Bathrooms should feel pristine and spa-like. Clear countertops of toothbrushes, cosmetics, grooming products, medications, and cleaning supplies. Remove toilet brushes, plungers, scales, bath mats, used towels, and wastebaskets.</p>
                <p>Close toilet lids and hang fresh, coordinated towels neatly. Clean shower glass, mirrors, faucets, tubs, and sinks. Place a new roll of toilet paper on the holder and remove extra products from the shower.</p>
                <p>A small plant, folded hand towel, or understated decorative item can soften the space without creating clutter.</p>
              </section>

              <section className="prep-article-section" id="lighting">
                <p className="prep-section-number">08</p>
                <h2>Check Lighting Throughout the Property</h2>
                <p>Replace burned-out bulbs before the appointment and use matching bulb colors whenever possible. A mixture of warm and cool bulbs can make a room look inconsistent on camera.</p>
                <p>Unless your photographer provides different instructions, turn on interior and exterior lights before the appointment. Open curtains and straighten blinds so they appear uniform. The photographer may adjust window coverings or lights depending on the room and shooting technique.</p>
                <p>Turn off all ceiling fans, televisions, and computer monitors. Moving fan blades can blur in photographs and create distractions in video footage.</p>
              </section>

              <section className="prep-article-section" id="curb-appeal">
                <p className="prep-section-number">09</p>
                <h2>Create Strong Curb Appeal</h2>
                <p>Exterior images often become the first photos buyers see online, so the front of the property deserves special attention.</p>
                <p>Mow and edge the lawn, trim shrubs, remove weeds, sweep walkways, and clear leaves or debris. Hide garden hoses, trash bins, tools, toys, portable basketball goals, and seasonal decorations. Clean the front door and arrange any outdoor furniture neatly.</p>
                <p>Move vehicles out of the driveway and, if possible, away from the front of the property. This is particularly important for drone photography and video because vehicles may remain visible from above even when parked farther down the street.</p>
                <p>In the Greater Houston Area, pay close attention to patios, pools, and outdoor living areas. Skim the pool, remove cleaning equipment, straighten lounge chairs, close outdoor storage, and clear patios of unnecessary items. If you have water features, fire features, or outdoor lighting, make sure they are operational.</p>
              </section>

              <section className="prep-article-section" id="specialty-services">
                <p className="prep-section-number">10</p>
                <h2>Prepare for Drone, Twilight, and Specialty Services</h2>
                <p>Drone photography captures the entire property and its surroundings. Clear the driveway, yard, patio, pool area, and other outdoor spaces. Inform the media team in advance about gates, restricted access, nearby airports, or other conditions that could affect drone operations. Flights always remain subject to weather and applicable airspace requirements.</p>
                <p>For twilight photography, replace exterior bulbs, clean outdoor fixtures, and confirm that landscape, pool, patio, and architectural lighting works properly. The warm glow of consistent lighting is essential to the finished look.</p>
                <p>For virtual staging, empty rooms should be completely clean and free of boxes, cords, cleaning equipment, and leftover furniture. Virtual staging looks most convincing when the original room has a polished, unobstructed foundation.</p>
                <p>Social media reels and property videos capture transitions between rooms, so hallways, entryways, staircases, and connecting spaces should receive the same attention as the main rooms.</p>
              </section>

              <section className="prep-article-section" id="pets-and-access">
                <p className="prep-section-number">11</p>
                <h2>Secure Pets and Plan to Leave During the Appointment</h2>
                <p>For everyone’s safety and comfort, pets should be removed from the property or secured in a crate or enclosed area that will not be photographed. Remember to hide pet beds, bowls, toys, litter boxes, and waste.</p>
                <p>Homeowners, tenants, children, and additional vehicles should ideally be away from the property during the appointment. This gives the media team space to work efficiently and prevents people from appearing in photographs, reflections, video, drone footage, or 3D tours.</p>
                <p>Before leaving, make sure the photographer has any necessary gate codes, lockbox instructions, alarm details, and access information.</p>
              </section>

              <section className="prep-article-section prep-final-checklist" id="final-checklist">
                <p className="prep-section-number">12</p>
                <h2>Final Real Estate Media Day Checklist</h2>
                <p>Before the New Listing Media Tx team arrives, complete one final walkthrough:</p>
                <ul className="prep-checklist prep-checklist--final">
                  {finalChecklist.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>

              <section className="prep-article-conclusion">
                <p className="prep-section-number">Ready for media day</p>
                <h2>Showcase Your Houston Property at Its Best</h2>
                <p>Careful preparation helps professional real estate media reveal what makes a property exceptional. By cleaning thoroughly, reducing visual distractions, preparing outdoor areas, and planning for every service included in your appointment, you create the ideal conditions for compelling photographs and video.</p>
                <p>New Listing Media Tx provides professional real estate photography, video, drone media, Zillow 3D Home tours, floor plans, twilight photography, virtual staging, and social media reels throughout the Greater Houston Area.</p>
                <p className="prep-article-conclusion__prompt">Ready to give your next listing the presentation it deserves? <strong>Book an appointment with New Listing Media Tx through our website or call us at 713-702-2682.</strong></p>
                <div className="prep-article-actions">
                  <a className="button button--gold" href={business.orderUrl}>Book an appointment <Arrow /></a>
                  <a className="prep-phone-link" href={business.phoneHref}>Call {business.phoneDisplay}</a>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
