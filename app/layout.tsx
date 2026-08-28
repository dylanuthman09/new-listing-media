import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://newlistingmediatx.com"),
  title: {
    default: "New Listing Media | Houston Real Estate Photography",
    template: "%s",
  },
  description:
    "Professional real estate photography, videography, and aerial media for listings across the Houston area.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "New Listing Media",
    description:
      "Photography, video, and aerial imagery crafted to make every listing feel worth seeing.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1728,
        height: 909,
        alt: "New Listing Media — Make every listing feel worth seeing.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Listing Media",
    description:
      "Photography, video, and aerial imagery crafted to make every listing feel worth seeing.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
