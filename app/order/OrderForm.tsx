"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { business } from "../site-data";

type OrderItem = {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  priceLabel: string;
  category: "Packages" | "Aerials" | "Videos" | "Additional services";
  image: string;
  details: string[];
  package?: boolean;
  compare?: boolean;
  beforeImage?: string;
  afterImage?: string;
  process?: string[];
};

type AddressSuggestion = {
  id: string;
  label: string;
  primary: string;
  secondary: string;
  city: string;
  state: string;
  zip: string;
};

const steps = ["Address", "Services", "Scheduling", "Contact", "Confirm"];

const orderItems: OrderItem[] = [
  {
    id: "base-package",
    title: "Base Package",
    subtitle: "The listing essentials",
    price: 400,
    priceLabel: "$400",
    category: "Packages",
    image: "/media/interior-living.jpg",
    package: true,
    details: ["Unlimited HDR photographs", "3D virtual tour", "One virtual twilight", "Listing website"],
  },
  {
    id: "silver-package",
    title: "Silver Package",
    subtitle: "Expanded visual coverage",
    price: 550,
    priceLabel: "$550",
    category: "Packages",
    image: "/media/twilight-05.jpg",
    package: true,
    details: ["Unlimited HDR photographs", "3D floor plan", "Aerials", "Two virtual twilights", "Three virtually staged images", "Property website"],
  },
  {
    id: "gold-package",
    title: "Gold Package",
    subtitle: "Complete listing launch",
    price: 800,
    priceLabel: "$800",
    category: "Packages",
    image: "/media/aerial-land-showcase-poster.jpg",
    package: true,
    details: ["Unlimited HDR photographs", "3D floor plan", "Aerials", "4K walkthrough video", "Two virtual twilights", "Three virtually staged photographs", "Property website"],
  },
  {
    id: "aerial-house",
    title: "Aerials for a House",
    subtitle: "With photography purchase",
    price: 99,
    priceLabel: "$99",
    category: "Aerials",
    image: "/media/aerial-property-reveal-poster.jpg",
    details: ["Professional drone stills", "Available when purchased with photography", "Adds neighborhood and property context"],
  },
  {
    id: "aerial-lot-small",
    title: "Aerial Lot Shoot",
    subtitle: "1–5 acres",
    price: 200,
    priceLabel: "$200",
    category: "Aerials",
    image: "/media/aerial-estate.jpg",
    details: ["Coverage for lots from 1 to 5 acres", "Wide establishing views", "Boundary and access context"],
  },
  {
    id: "aerial-lot-medium",
    title: "Aerial Lot Shoot",
    subtitle: "6–10 acres",
    price: 250,
    priceLabel: "$250",
    category: "Aerials",
    image: "/media/aerial-community.jpg",
    details: ["Coverage for lots from 6 to 10 acres", "Wide establishing views", "Boundary and access context"],
  },
  {
    id: "aerial-lot-large",
    title: "Aerial Lot Shoot",
    subtitle: "More than 10 acres",
    price: 300,
    priceLabel: "$300",
    category: "Aerials",
    image: "/media/aerial-land-showcase-poster.jpg",
    details: ["Coverage for properties over 10 acres", "Multiple elevated perspectives", "Land, access, and surrounding context"],
  },
  {
    id: "social-reel",
    title: "Social-Media Reel",
    subtitle: "Vertical short-form video",
    price: 199,
    priceLabel: "$199",
    category: "Videos",
    image: "/media/residential-exterior.jpg",
    details: ["Short-form property edit", "Formatted for social media", "Designed for fast listing promotion"],
  },
  {
    id: "walkthrough",
    title: "4K Walkthrough Video",
    subtitle: "Cinematic property tour",
    price: 350,
    priceLabel: "$350",
    category: "Videos",
    image: "/media/hero-film-poster.jpg",
    details: ["Cinematic walkthrough", "4K delivery", "Interior, exterior, and property flow coverage"],
  },
  {
    id: "talking-head",
    title: "Talking-Head Add-On",
    subtitle: "Agent-led introduction",
    price: 100,
    priceLabel: "$100",
    category: "Videos",
    image: "/media/interior-living.jpg",
    details: ["On-camera agent segment", "Added to a video service", "A direct introduction to the property"],
  },
  {
    id: "virtual-twilight",
    title: "Virtual Twilight",
    subtitle: "$40 per image",
    price: 40,
    priceLabel: "$40",
    category: "Additional services",
    image: "/media/twilight-01.jpg",
    details: ["Day-to-dusk exterior conversion", "Warm window and exterior lighting", "Quantity can be adjusted in your cart"],
  },
  {
    id: "real-twilight",
    title: "Real Twilight Sitting",
    subtitle: "On-location evening session",
    price: 139,
    priceLabel: "$139",
    category: "Additional services",
    image: "/media/twilight-07.jpg",
    details: ["On-location twilight capture", "Scheduled around sunset", "Exterior lighting and sky balance"],
  },
  {
    id: "virtual-staging",
    title: "Virtual Staging",
    subtitle: "$30 per image",
    price: 30,
    priceLabel: "$30",
    category: "Additional services",
    image: "/media/interior-living.jpg",
    compare: true,
    beforeImage: "/media/virtual-staging/staging-5-before.jpg",
    afterImage: "/media/virtual-staging/staging-5-after.jpg",
    details: ["Digital furnishing for empty rooms", "Style matched to the property", "Quantity can be adjusted in your cart"],
    process: ["Choose the empty-room photos", "Share the room use or style direction", "Receive listing-ready staged images"],
  },
  {
    id: "zillow-tour",
    title: "3D Zillow Tour / Floor Plan",
    subtitle: "With photography",
    price: 149,
    priceLabel: "$149",
    category: "Additional services",
    image: "/media/residential-exterior.jpg",
    details: ["Interactive 3D Zillow tour", "Floor plan included", "Available with photography"],
  },
  {
    id: "zillow-tour-copy",
    title: "Copy of 3D Zillow Tour / Floor Plan",
    subtitle: "Additional tour copy",
    price: 199,
    priceLabel: "$199",
    category: "Additional services",
    image: "/media/aerial-community.jpg",
    details: ["Copy of a 3D Zillow tour and floor plan", "Prepared as an additional deliverable", "Confirm listing details during scheduling"],
  },
];

function ComparePreview({ item }: { item: OrderItem }) {
  const [position, setPosition] = useState(52);
  const before = item.beforeImage || item.image;
  const after = item.afterImage || item.image;
  return (
    <div className={`order-compare ${item.beforeImage && item.afterImage ? "order-compare--photographic" : ""}`}>
      <img className="order-compare__before" src={before} alt={`${item.title} before service`} />
      <div className="order-compare__after" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <img src={after} alt={`${item.title} after service`} />
      </div>
      <span className="order-compare__label order-compare__label--before">Before</span>
      <span className="order-compare__label order-compare__label--after">After</span>
      <input
        aria-label={`Compare before and after for ${item.title}`}
        type="range"
        min="8"
        max="92"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
      />
      <span className="order-compare__handle" style={{ left: `${position}%` }}>↔</span>
    </div>
  );
}

export default function OrderForm() {
  const [step, setStep] = useState(0);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [expanded, setExpanded] = useState<string | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [error, setError] = useState("");
  const [manualAddress, setManualAddress] = useState(false);
  const [addressSuggestions, setAddressSuggestions] = useState<AddressSuggestion[]>([]);
  const [addressSearchStatus, setAddressSearchStatus] = useState<"" | "loading" | "empty" | "error">("");
  const [addressSuggestionsOpen, setAddressSuggestionsOpen] = useState(false);
  const [activeAddressIndex, setActiveAddressIndex] = useState(-1);
  const [addressFromSuggestion, setAddressFromSuggestion] = useState(false);
  const selectedAddressRef = useRef("");
  const addressCacheRef = useRef(new Map<string, AddressSuggestion[]>());
  const [emailChecked, setEmailChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [address, setAddress] = useState({
    search: "", city: "", state: "TX", zip: "", squareFeet: "", occupancy: "", access: "", lockbox: "", pets: "", instructions: "",
  });
  const [schedule, setSchedule] = useState({ date: "", backupDate: "", window: "", flexibility: "" });
  const [contact, setContact] = useState({ email: "", firstName: "", lastName: "", phone: "", brokerage: "", preference: "Email" });

  const selectedItems = useMemo(
    () => orderItems.filter((item) => (quantities[item.id] || 0) > 0),
    [quantities],
  );
  const total = useMemo(
    () => selectedItems.reduce((sum, item) => sum + item.price * (quantities[item.id] || 0), 0),
    [selectedItems, quantities],
  );

  const updateAddress = (key: keyof typeof address, value: string) => setAddress((current) => ({ ...current, [key]: value }));
  const updateSchedule = (key: keyof typeof schedule, value: string) => setSchedule((current) => ({ ...current, [key]: value }));
  const updateContact = (key: keyof typeof contact, value: string) => setContact((current) => ({ ...current, [key]: value }));

  const addItem = (item: OrderItem) => {
    setError("");
    setQuantities((current) => {
      const next = { ...current };
      if (item.package) {
        orderItems.filter((entry) => entry.package).forEach((entry) => { next[entry.id] = 0; });
        next[item.id] = 1;
      } else {
        next[item.id] = (next[item.id] || 0) + 1;
      }
      return next;
    });
  };

  const changeQuantity = (item: OrderItem, delta: number) => {
    setQuantities((current) => ({ ...current, [item.id]: Math.max(0, (current[item.id] || 0) + delta) }));
  };

  const validateStep = () => {
    if (step === 0 && (!address.search || !address.squareFeet || !address.occupancy || !address.access || !address.pets)) {
      setError("Please complete the required property details before continuing.");
      return false;
    }
    if (step === 1 && selectedItems.length === 0) {
      setError("You must select at least one service before continuing!");
      return false;
    }
    if (step === 2 && (!schedule.date || !schedule.window)) {
      setError("Please choose a preferred date and arrival window.");
      return false;
    }
    if (step === 3 && (!emailChecked || !contact.firstName || !contact.lastName || !contact.phone)) {
      setError("Please check your email and complete your contact details.");
      return false;
    }
    setError("");
    return true;
  };

  const nextStep = () => {
    if (!validateStep()) return;
    setStep((current) => Math.min(4, current + 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const previousStep = () => {
    setError("");
    setStep((current) => Math.max(0, current - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const checkEmail = () => {
    if (!/^\S+@\S+\.\S+$/.test(contact.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setEmailChecked(true);
  };

  useEffect(() => {
    const query = address.search.trim();
    if (manualAddress || query.length < 3 || query === selectedAddressRef.current) {
      setAddressSuggestionsOpen(false);
      setAddressSuggestions([]);
      setAddressSearchStatus("");
      setActiveAddressIndex(-1);
      return;
    }

    const cached = addressCacheRef.current.get(query.toLowerCase());
    if (cached) {
      setAddressSuggestions(cached);
      setAddressSuggestionsOpen(true);
      setAddressSearchStatus(cached.length ? "" : "empty");
      setActiveAddressIndex(-1);
      return;
    }

    const controller = new AbortController();
    const debounce = window.setTimeout(async () => {
      setAddressSearchStatus("loading");
      try {
        const response = await fetch(`/api/address-search?q=${encodeURIComponent(query)}`, { signal: controller.signal });
        if (!response.ok) throw new Error("Address search failed");
        const data = await response.json() as { suggestions?: AddressSuggestion[] };
        const suggestions = Array.isArray(data.suggestions) ? data.suggestions : [];
        addressCacheRef.current.set(query.toLowerCase(), suggestions);
        setAddressSuggestions(suggestions);
        setAddressSuggestionsOpen(true);
        setAddressSearchStatus(suggestions.length ? "" : "empty");
        setActiveAddressIndex(-1);
      } catch (searchError) {
        if (searchError instanceof DOMException && searchError.name === "AbortError") return;
        setAddressSuggestions([]);
        setAddressSuggestionsOpen(false);
        setAddressSearchStatus("error");
      }
    }, 300);

    return () => {
      window.clearTimeout(debounce);
      controller.abort();
    };
  }, [address.search, manualAddress]);

  const chooseAddress = (suggestion: AddressSuggestion) => {
    selectedAddressRef.current = suggestion.label;
    setAddress((current) => ({
      ...current,
      search: suggestion.label,
      city: suggestion.city,
      state: suggestion.state,
      zip: suggestion.zip,
    }));
    setAddressSuggestions([]);
    setAddressSuggestionsOpen(false);
    setAddressSearchStatus("");
    setActiveAddressIndex(-1);
    setAddressFromSuggestion(true);
    setManualAddress(false);
  };

  const handleAddressKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!addressSuggestions.length) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setAddressSuggestionsOpen(true);
      setActiveAddressIndex((current) => (current + 1) % addressSuggestions.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setAddressSuggestionsOpen(true);
      setActiveAddressIndex((current) => current <= 0 ? addressSuggestions.length - 1 : current - 1);
    } else if (event.key === "Enter" && activeAddressIndex >= 0) {
      event.preventDefault();
      chooseAddress(addressSuggestions[activeAddressIndex]);
    } else if (event.key === "Escape") {
      setAddressSuggestionsOpen(false);
      setActiveAddressIndex(-1);
    }
  };

  const submitOrder = () => {
    const itemLines = selectedItems.map((item) => `- ${item.title} x${quantities[item.id]} — $${(item.price * quantities[item.id]).toFixed(2)}`);
    const body = [
      "New order request",
      "",
      `Property: ${address.search}${!addressFromSuggestion && address.city ? `, ${address.city}, ${address.state} ${address.zip}` : ""}`,
      `Square footage: ${address.squareFeet}`,
      `Occupancy: ${address.occupancy}`,
      `Access: ${address.access}`,
      `Lockbox / SUPRA: ${address.lockbox || "N/A"}`,
      `Pets: ${address.pets}`,
      `Special instructions: ${address.instructions || "None"}`,
      "",
      "Services:",
      ...itemLines,
      `Estimated total: $${total.toFixed(2)}`,
      "",
      `Preferred date: ${schedule.date}`,
      `Backup date: ${schedule.backupDate || "None"}`,
      `Arrival window: ${schedule.window}`,
      `Scheduling notes: ${schedule.flexibility || "None"}`,
      "",
      `Client: ${contact.firstName} ${contact.lastName}`,
      `Email: ${contact.email}`,
      `Phone: ${contact.phone}`,
      `Brokerage: ${contact.brokerage || "N/A"}`,
      `Preferred contact: ${contact.preference}`,
    ].join("\n");
    setSubmitted(true);
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(`New order request — ${address.search}`)}&body=${encodeURIComponent(body)}`;
  };

  const renderError = () => error ? (
    <div className="order-alert" role="alert"><span>!</span><div><strong>{step === 1 ? "Please Select Service" : "Please review this step"}</strong><p>{error}</p></div></div>
  ) : null;

  return (
    <main className="order-page">
      <section className="order-intro">
        <h1>Place Order</h1>
        <Link href="/" aria-label="Return to New Listing Media home"><img src="/media/logo-dark.png" alt="New Listing Media" /></Link>
        <p>All of your order details are included below. You can login to your account to further access this.</p>
      </section>

      <section className="order-shell">
        <ol className="order-steps" aria-label="Order progress">
          {steps.map((label, index) => (
            <li className={index === step ? "is-active" : index < step ? "is-complete" : ""} key={label}>
              <span>{index < step ? "✓" : index + 1}</span>{label}
            </li>
          ))}
        </ol>

        {step > 0 ? (
          <div className="order-cartbar">
            <button type="button" onClick={() => setCartOpen((current) => !current)}>View Cart</button>
            <strong>Total: ${total.toFixed(2)}</strong>
          </div>
        ) : null}

        {cartOpen && step > 0 ? (
          <div className="order-cart-drawer">
            {selectedItems.length ? selectedItems.map((item) => (
              <div key={item.id}><span>{item.title} × {quantities[item.id]}</span><strong>${(item.price * quantities[item.id]).toFixed(2)}</strong></div>
            )) : <p>Your cart is empty.</p>}
          </div>
        ) : null}

        {step === 0 ? (
          <>
            <header className="order-section-head"><h2>Address</h2><p>Please enter your address below. If the address is at an apartment or unit, please make sure to note which one.</p></header>
            <div className="order-form-body">
              {renderError()}
              <div className="order-address-search">
                <label htmlFor="order-address-search">Search Address</label>
                <div className="order-address-combobox">
                  <input
                    id="order-address-search"
                    role="combobox"
                    aria-autocomplete="list"
                    aria-controls="order-address-suggestions"
                    aria-describedby="address-search-status"
                    aria-expanded={addressSuggestionsOpen && addressSuggestions.length > 0}
                    aria-activedescendant={activeAddressIndex >= 0 ? `order-address-option-${activeAddressIndex}` : undefined}
                    autoComplete="off"
                    value={address.search}
                    onChange={(event) => {
                      selectedAddressRef.current = "";
                      setAddressFromSuggestion(false);
                      updateAddress("search", event.target.value);
                      setAddressSuggestionsOpen(true);
                    }}
                    onFocus={() => addressSuggestions.length && setAddressSuggestionsOpen(true)}
                    onBlur={() => window.setTimeout(() => setAddressSuggestionsOpen(false), 120)}
                    onKeyDown={handleAddressKeyDown}
                    placeholder="⌕  Search a U.S. address..."
                  />
                  {addressSuggestionsOpen && addressSuggestions.length ? (
                    <ul className="order-address-suggestions" id="order-address-suggestions" role="listbox">
                      {addressSuggestions.map((suggestion, index) => (
                        <li
                          id={`order-address-option-${index}`}
                          role="option"
                          aria-selected={index === activeAddressIndex}
                          className={index === activeAddressIndex ? "is-active" : ""}
                          key={suggestion.id}
                        >
                          <button type="button" tabIndex={-1} onMouseDown={(event) => event.preventDefault()} onClick={() => chooseAddress(suggestion)}>
                            <strong>{suggestion.primary}</strong>
                            <span>{suggestion.secondary}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
                <p className="order-address-status" id="address-search-status" aria-live="polite">
                  {addressSearchStatus === "loading" ? "Searching U.S. addresses…" : null}
                  {addressSearchStatus === "empty" ? "No matching U.S. addresses found. Keep typing or enter the address manually." : null}
                  {addressSearchStatus === "error" ? "Address suggestions are temporarily unavailable. You can enter the address manually." : null}
                  {!addressSearchStatus ? "Suggestions are limited to U.S. addresses." : null}
                </p>
              </div>
              <button className="order-text-button" type="button" onClick={() => { setManualAddress((current) => !current); setAddressSuggestionsOpen(false); }}>{manualAddress ? "Hide Manual Fields" : "Enter Manually"}</button>
              {manualAddress ? <div className="order-field-row order-field-row--three"><label>City<input value={address.city} onChange={(e) => updateAddress("city", e.target.value)} /></label><label>State<input value={address.state} onChange={(e) => updateAddress("state", e.target.value)} /></label><label>ZIP code<input value={address.zip} onChange={(e) => updateAddress("zip", e.target.value)} /></label></div> : null}
              <div className="order-divider" />
              <label>Square Footage<input inputMode="numeric" value={address.squareFeet} onChange={(e) => updateAddress("squareFeet", e.target.value)} /></label>
              <label>Occupancy<select value={address.occupancy} onChange={(e) => updateAddress("occupancy", e.target.value)}><option value="">Select occupancy</option><option>Vacant</option><option>Owner occupied</option><option>Tenant occupied</option></select></label>
              <label>Property Access<span>How will the photographer be provided access to the property?</span><select value={address.access} onChange={(e) => updateAddress("access", e.target.value)}><option value="">Select access method</option><option>SUPRA</option><option>Lockbox</option><option>Agent will meet photographer</option><option>Owner will meet photographer</option><option>Other</option></select></label>
              <label>SUPRA or Lockbox code<span>Please provide lock code. You can provide a manual lockbox code, electronic keypad code, or garage code. If not applicable, enter N/A.</span><input value={address.lockbox} onChange={(e) => updateAddress("lockbox", e.target.value)} /></label>
              <label>Any pets on the property?<select value={address.pets} onChange={(e) => updateAddress("pets", e.target.value)}><option value="">Select an answer</option><option>No</option><option>Yes — secured</option><option>Yes — not secured</option><option>N/A</option></select></label>
              <label>Any special instructions?<textarea value={address.instructions} onChange={(e) => updateAddress("instructions", e.target.value)} rows={3} /></label>
            </div>
          </>
        ) : null}

        {step === 1 ? (
          <>
            <header className="order-section-head"><h2>Services</h2><p>Please choose your items below.</p><div className="order-signin"><span>Sign in now</span><a href={business.loginUrl}>↪ Sign In</a></div></header>
            <div className="order-services-body">
              {renderError()}
              {(["Packages", "Aerials", "Videos", "Additional services"] as const).map((category) => (
                <section className="order-service-group" key={category}>
                  <div className="order-service-group__head"><h3>{category}</h3><span>{orderItems.filter((item) => item.category === category).length} options</span></div>
                  <div className={`order-service-grid ${category === "Packages" ? "order-service-grid--packages" : ""}`}>
                    {orderItems.filter((item) => item.category === category).map((item) => {
                      const quantity = quantities[item.id] || 0;
                      const isExpanded = expanded === item.id;
                      return (
                        <article className={`order-service-card ${isExpanded ? "is-expanded" : ""} ${quantity ? "is-selected" : ""}`} key={item.id}>
                          {item.compare ? <ComparePreview item={item} /> : <img className="order-service-card__image" src={item.image} alt="" />}
                          <div className="order-service-card__content">
                            <h4>{item.title}</h4><p>{item.subtitle}</p>
                            {isExpanded ? <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul> : null}
                            {isExpanded && item.process ? <ol className="order-staging-process" aria-label={`${item.title} process`}>{item.process.map((detail, index) => <li key={detail}><span>0{index + 1}</span>{detail}</li>)}</ol> : null}
                            <button className="order-detail-button" type="button" onClick={() => setExpanded(isExpanded ? null : item.id)}>{isExpanded ? "Minimize View" : "View Details"}</button>
                            <div className="order-service-card__actions">
                              <strong>{item.priceLabel}</strong>
                              {quantity ? (
                                <div className="order-quantity" aria-label={`${item.title} quantity`}>
                                  <button type="button" onClick={() => changeQuantity(item, -1)}>−</button><span>{quantity}</span>{item.package ? null : <button type="button" onClick={() => changeQuantity(item, 1)}>+</button>}<button className="order-remove" type="button" aria-label={`Remove ${item.title}`} onClick={() => setQuantities((current) => ({ ...current, [item.id]: 0 }))}>×</button>
                                </div>
                              ) : <button className="order-add" type="button" onClick={() => addItem(item)}>Add</button>}
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          </>
        ) : null}

        {step === 2 ? (
          <>
            <header className="order-section-head"><h2>Scheduling</h2><p>Choose your preferred date and arrival window. We will confirm the appointment after reviewing availability and weather.</p></header>
            <div className="order-form-body">
              {renderError()}
              <div className="order-field-row"><label>Preferred date<input type="date" value={schedule.date} onChange={(e) => updateSchedule("date", e.target.value)} /></label><label>Backup date<input type="date" value={schedule.backupDate} onChange={(e) => updateSchedule("backupDate", e.target.value)} /></label></div>
              <label>Preferred arrival window<select value={schedule.window} onChange={(e) => updateSchedule("window", e.target.value)}><option value="">Select a window</option><option>Morning — 8:00 AM to 11:00 AM</option><option>Midday — 11:00 AM to 2:00 PM</option><option>Afternoon — 2:00 PM to 5:00 PM</option><option>Twilight — scheduled around sunset</option><option>Flexible</option></select></label>
              <label>Scheduling flexibility or timing notes<textarea rows={4} value={schedule.flexibility} onChange={(e) => updateSchedule("flexibility", e.target.value)} placeholder="Gate access, tenant timing, agent availability, or other notes..." /></label>
              <div className="order-note"><strong>Weather-aware scheduling</strong><p>Aerial and twilight services may need to shift for rain, wind, or cloud conditions. We will contact you before making any changes.</p></div>
            </div>
          </>
        ) : null}

        {step === 3 ? (
          <>
            <header className="order-section-head"><h2>Contact</h2><p>Sign in or create your account to easily manage all of your content, marketing, and listings! Let&apos;s start with your email below.</p></header>
            <div className="order-form-body">
              {renderError()}
              <label>Email address<input type="email" value={contact.email} onChange={(e) => { updateContact("email", e.target.value); setEmailChecked(false); }} /></label>
              <button className="order-primary-button order-check-email" type="button" onClick={checkEmail}>{emailChecked ? "Email checked ✓" : "Check email"}</button>
              {emailChecked ? <div className="order-contact-fields"><div className="order-field-row"><label>First name<input value={contact.firstName} onChange={(e) => updateContact("firstName", e.target.value)} /></label><label>Last name<input value={contact.lastName} onChange={(e) => updateContact("lastName", e.target.value)} /></label></div><div className="order-field-row"><label>Phone number<input type="tel" value={contact.phone} onChange={(e) => updateContact("phone", e.target.value)} /></label><label>Brokerage or company<input value={contact.brokerage} onChange={(e) => updateContact("brokerage", e.target.value)} /></label></div><label>Preferred contact method<select value={contact.preference} onChange={(e) => updateContact("preference", e.target.value)}><option>Email</option><option>Phone call</option><option>Text message</option></select></label></div> : null}
            </div>
          </>
        ) : null}

        {step === 4 ? (
          <>
            <header className="order-section-head"><h2>Confirm</h2><p>Review your property, schedule, contact information, and selected services before sending your request.</p></header>
            <div className="order-confirm-body">
              {submitted ? <div className="order-success"><span>✓</span><div><strong>Your order request is ready.</strong><p>Your email app has been opened with the complete request. Send that message to deliver it to New Listing Media.</p></div></div> : null}
              <div className="order-confirm-grid">
                <article><span>Property</span><h3>{address.search}</h3><p>{address.squareFeet} sq. ft. · {address.occupancy}<br />Access: {address.access}</p><button type="button" onClick={() => setStep(0)}>Edit</button></article>
                <article><span>Scheduling</span><h3>{schedule.date}</h3><p>{schedule.window}<br />Backup: {schedule.backupDate || "Not selected"}</p><button type="button" onClick={() => setStep(2)}>Edit</button></article>
                <article><span>Contact</span><h3>{contact.firstName} {contact.lastName}</h3><p>{contact.email}<br />{contact.phone}</p><button type="button" onClick={() => setStep(3)}>Edit</button></article>
              </div>
              <section className="order-summary"><h3>Services</h3>{selectedItems.map((item) => <div key={item.id}><span>{item.title} × {quantities[item.id]}</span><strong>${(item.price * quantities[item.id]).toFixed(2)}</strong></div>)}<div className="order-summary__total"><span>Estimated total</span><strong>${total.toFixed(2)}</strong></div></section>
              <div className="order-confirm-note"><strong>Scheduling and payment</strong><p>This request does not charge your card. New Listing Media will confirm availability, timing, final scope, and payment details with you.</p></div>
            </div>
          </>
        ) : null}

        <footer className="order-footer">
          {step > 0 ? <button className="order-secondary-button" type="button" onClick={previousStep}>Previous</button> : <span />}
          {step < 4 ? <button className="order-primary-button" type="button" onClick={nextStep}>Next Step</button> : <button className="order-primary-button" type="button" onClick={submitOrder}>Send Order Request</button>}
        </footer>
      </section>
      <p className="order-help">Need help choosing? Call <a href={business.phoneHref}>{business.phoneDisplay}</a> or <a href={`mailto:${business.email}`}>email the team</a>.</p>
    </main>
  );
}
