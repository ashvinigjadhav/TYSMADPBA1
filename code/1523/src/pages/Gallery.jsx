import React, { useState } from "react";
import MasonryGallery from "../components/MasonryGallery";
import Lightbox from "../components/Lightbox";

export default function Gallery() {
  const [selected, setSelected] = useState(null); 
  const [images, setImages] = useState([]);       
  const [index, setIndex] = useState(0);          


  async function setSelectedArtwork(imgObj) {
    try {
      const res = await fetch("/artworks.json");
      const list = await res.json();
      const art = list.find((a) => a.images.includes(imgObj.src));
      if (!art) return;
      setImages(art.images);
      const idx = art.images.indexOf(imgObj.src);
      setIndex(idx >= 0 ? idx : 0);
      setSelected(art);
    } catch (err) {
      console.error("Failed to load artwork data", err);
    }
  }

  function handleClose() {
    setSelected(null);
    setImages([]);
    setIndex(0);
  }
  function handleNext() {
    setIndex((i) => (images.length ? (i + 1) % images.length : i));
  }
  function handlePrev() {
    setIndex((i) => (images.length ? (i - 1 + images.length) % images.length : i));
  }

  return (
    <section>
      <h2>Gallery</h2>
      <p style={{ color: "var(--muted)" }}>
        Click any artwork to open the lightbox. Use ← → to navigate, Esc to close.
      </p>

      {/* MasonryGallery will call setSelectedArtwork when an item is clicked */}
      <MasonryGallery setSelectedArtwork={setSelectedArtwork} />

      {/* Lightbox shows when an artwork is selected */}
      {selected && (
        <Lightbox
          images={images}
          startIndex={index}
          onClose={handleClose}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
}