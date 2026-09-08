const ARYEO_ORDER_URL = "https://media.newlistingmediatx.com/order";

export default function AryeoOrderForm() {
  return (
    <div className="aryeo-order-embed">
      <iframe
        title="New Listing Media order form"
        src={ARYEO_ORDER_URL}
        allow="geolocation"
        loading="eager"
      />
      <p className="aryeo-order-fallback">
        If the form does not load, <a href={ARYEO_ORDER_URL}>open the secure order page</a>.
      </p>
    </div>
  );
}
