"use client";

import Link from "next/link";
import { useState } from "react";

const stagingPairs = [
  { name: "Game room", before: "/media/virtual-staging/staging-1-before.jpg", after: "/media/virtual-staging/staging-1-after.jpg" },
  { name: "Home office", before: "/media/virtual-staging/staging-2-before.jpg", after: "/media/virtual-staging/staging-2-after.jpg" },
  { name: "Great room", before: "/media/virtual-staging/staging-3-before.jpg", after: "/media/virtual-staging/staging-3-after.jpg" },
  { name: "Dining area", before: "/media/virtual-staging/staging-4-before.jpg", after: "/media/virtual-staging/staging-4-after.jpg" },
  { name: "Primary bedroom", before: "/media/virtual-staging/staging-5-before.jpg", after: "/media/virtual-staging/staging-5-after.jpg" },
];

export default function VirtualStagingShowcase({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState(compact ? 2 : 0);
  const [position, setPosition] = useState(50);
  const pair = stagingPairs[active];

  const choosePair = (index: number) => {
    setActive(index);
    setPosition(50);
  };

  return (
    <div className={`staging-showcase ${compact ? "staging-showcase--compact" : ""}`}>
      <div className="staging-compare">
        <img src={pair.before} alt={`Empty ${pair.name.toLowerCase()} before virtual staging`} />
        <img
          className="staging-compare__after"
          src={pair.after}
          alt={`${pair.name} after virtual staging`}
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />
        <span className="staging-compare__label staging-compare__label--before">Before</span>
        <span className="staging-compare__label staging-compare__label--after">After</span>
        <span className="staging-compare__line" style={{ left: `${position}%` }} aria-hidden="true">
          <span>↔</span>
        </span>
        <input
          type="range"
          min="5"
          max="95"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label={`Compare ${pair.name.toLowerCase()} before and after virtual staging`}
        />
      </div>

      <div className="staging-showcase__footer">
        <div>
          <span className="staging-showcase__count">0{active + 1} / 05</span>
          <h3>{pair.name}</h3>
          <p>Drag the slider to see how intentional furniture, scale, and styling help buyers understand the room.</p>
        </div>
        <div className="staging-tabs" aria-label="Choose a virtual staging example">
          {stagingPairs.map((item, index) => (
            <button
              className={index === active ? "is-active" : ""}
              type="button"
              onClick={() => choosePair(index)}
              aria-pressed={index === active}
              key={item.name}
            >
              <img src={item.after} alt="" loading="lazy" />
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      {compact ? (
        <div className="staging-showcase__action">
          <p><strong>Empty room in.</strong> Listing-ready image out.</p>
          <Link className="button button--gold" href="/order">Add Virtual Staging</Link>
        </div>
      ) : null}
    </div>
  );
}
