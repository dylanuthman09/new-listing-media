"use client";

import { useEffect, useState } from "react";
import { SiteHeader } from "./components";

export default function ScrolledSiteHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".home-hero");
    if (!hero) return;

    const updateVisibility = () => {
      setIsVisible(hero.getBoundingClientRect().bottom <= 0);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <div
      className={`scrolled-header ${isVisible ? "scrolled-header--visible" : ""}`}
      aria-hidden={!isVisible}
    >
      <SiteHeader cinematic />
    </div>
  );
}
