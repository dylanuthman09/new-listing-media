import type { Metadata } from "next";
import Link from "next/link";
import AryeoOrderForm from "./AryeoOrderForm";

export const metadata: Metadata = {
  title: "Place Order | New Listing Media",
  description: "Order real estate photography, aerial media, property video, and listing enhancements from New Listing Media.",
};

export default function OrderPage() {
  return (
    <main className="order-page aryeo-order-page">
      <section className="order-intro">
        <h1>Place Order</h1>
        <Link href="/" aria-label="Return to New Listing Media home">
          <img src="/media/logo-dark.png" alt="New Listing Media" />
        </Link>
        <p>Choose your services and schedule through our secure ordering portal.</p>
      </section>

      <section className="aryeo-order-shell" aria-label="New Listing Media order form">
        <AryeoOrderForm />
      </section>
    </main>
  );
}
