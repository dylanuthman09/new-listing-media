"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { business } from "./site-data";

type MobileNavProps = {
  cinematic?: boolean;
};

export default function MobileNav({ cinematic = false }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigationId = `mobile-navigation-${useId().replace(/:/g, "")}`;
  const links = cinematic
    ? [
        ["Home", "/"],
        ["Portfolio", "/gallery"],
        ["Services", "/services"],
        ["Book Now", business.orderUrl],
        ["Contact", "/contact"],
      ]
    : [
        ["Portfolio", "/gallery"],
        ["Services", "/services"],
        ["About", "/about"],
        ["Insights", "/insights"],
        ["Order a Shoot", business.orderUrl],
      ];

  return (
    <div className="mobile-menu">
      <button
        className="mobile-menu__toggle"
        type="button"
        aria-controls={navigationId}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      {isOpen ? (
        <nav id={navigationId} className="mobile-menu__panel" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <Link href={href} key={label} onClick={() => setIsOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
