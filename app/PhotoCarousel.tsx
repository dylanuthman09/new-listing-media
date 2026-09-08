"use client";

import { useState } from "react";

export default function PhotoCarousel({
  images,
  label,
}: {
  images: { src: string; alt: string }[];
  label: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const previousIndex = (activeIndex - 1 + images.length) % images.length;
  const nextIndex = (activeIndex + 1) % images.length;
  const activeImage = images[activeIndex];

  return (
    <div className="luxury-photo-carousel section-shell" aria-label={label}>
      <div className="luxury-photo-carousel__stage" aria-live="polite">
        <img src={activeImage.src} alt={activeImage.alt} />
        <button type="button" className="luxury-photo-carousel__arrow luxury-photo-carousel__arrow--previous" onClick={() => setActiveIndex(previousIndex)} aria-label={`Previous ${label} image`}>
          <span aria-hidden="true">←</span>
        </button>
        <button type="button" className="luxury-photo-carousel__arrow luxury-photo-carousel__arrow--next" onClick={() => setActiveIndex(nextIndex)} aria-label={`Next ${label} image`}>
          <span aria-hidden="true">→</span>
        </button>
      </div>
      <div className="luxury-photo-carousel__footer">
        <span>{String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
        <div className="luxury-photo-carousel__dots" aria-label={`Choose a ${label} image`}>
          {images.map((image, index) => (
            <button
              type="button"
              className={index === activeIndex ? "is-active" : ""}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show image ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              key={image.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
