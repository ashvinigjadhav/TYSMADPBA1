import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./masonry.css";

export default function MasonryGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        setLoading(true);
        setErr("");
        const res = await fetch("/artworks.json");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const list = await res.json();
        const imgs = list.flatMap((a) =>
          (a.images && a.images.length ? a.images : [null]).map((src) => ({
            src: src || (a.fallback || "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?q=80&w=900&auto=format&fit=crop"),
            title: a.title || "Untitled",
            id: a.id,
            price: a.price || "₹0",
          }))
        );
        if (!cancelled) setImages(imgs);
      } catch (e) {
        console.error("MasonryGallery load error:", e);
        if (!cancelled) setErr(String(e.message || e));
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  if (loading) return <div style={{ padding: 24 }}>Loading gallery…</div>;
  if (err) return (
    <div style={{ padding: 24, color: "salmon" }}>
      Failed to load gallery: {err}
      <div style={{ marginTop: 8, color: "var(--muted)" }}>
        Tip: create <code>public/artworks.json</code> and ensure images are under <code>public/assets/artworks/</code>.
      </div>
    </div>
  );

  if (images.length === 0) return <div style={{ padding: 24 }}>No artworks found.</div>;

  return (
    <div>
      <div className="masonry-grid" aria-live="polite">
        {images.map((img, i) => (
          <figure key={img.src + i} className="masonry-item card">
            <Link to={`/artwork/${img.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                onError={(ev) => { ev.currentTarget.src = "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?q=80&w=900&auto=format&fit=crop"; }}
              />
              <figcaption>
                <strong>{img.title}</strong>
                <div className="meta-line">{img.price}</div>
              </figcaption>
            </Link>
          </figure>
        ))}
      </div>
    </div>
  );
}