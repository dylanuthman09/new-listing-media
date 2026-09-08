import type { Metadata } from "next";
import OrderForm from "./OrderForm";

export const metadata: Metadata = {
  title: "Place Order | New Listing Media",
  description: "Order real estate photography, aerial media, property video, and listing enhancements from New Listing Media.",
};

export default function OrderPage() {
  return <OrderForm />;
}
