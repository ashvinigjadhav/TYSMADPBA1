import React, { useEffect } from "react";

export default function Lightbox({ images = [], startIndex = 0, onClose, onNext, onPrev }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onNext, onPrev]);

  if (!images || images.length === 0) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <button className="lb-btn lb-close" onClick={onClose} aria-label="Close">✕</button>
        <button className="lb-btn lb-left" onClick={onPrev} aria-label="Previous">‹</button>
        <img src={images[startIndex]} alt="Artwork enlarged" />
        <button className="lb-btn lb-right" onClick={onNext} aria-label="Next">›</button>
      </div>
    </div>
  );
}