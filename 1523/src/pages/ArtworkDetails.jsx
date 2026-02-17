import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addToCart } from "../utils/cart";
export default function ArtworkDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchArtwork() {
      try {
        const res = await fetch("/artworks.json"); 
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const list = await res.json();
        const found = list.find((a) => a.id === id);
        if (!found) throw new Error("Artwork not found");
        setArtwork(found);
      } catch (err) {
        console.error("Error loading artwork:", err);
        setError("Could not load artwork details.");
      } finally {
        setLoading(false);
      }
    }
    fetchArtwork();
  }, [id]);

  const handleAddToCart = () => {
    addToCart({
      id: artwork.id,
      title: artwork.title,
      price: artwork.price,
      image: artwork.images?.[0],
    });
    alert(`✅ "${artwork.title}" added to cart!`);
  };

  const handleBuyNow = () => {
    addToCart({
      id: artwork.id,
      title: artwork.title,
      price: artwork.price,
      image: artwork.images?.[0],
    });
    navigate("/cart");
  };

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
  if (error) return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;

  return (
    <section style={{ padding: "2rem", textAlign: "center" }}>
      <h2>{artwork.title}</h2>
      <img
        src={artwork.images?.[0]}
        alt={artwork.title}
        style={{ maxWidth: "600px", borderRadius: "10px", marginTop: "1rem" }}
      />
      <p style={{ marginTop: "1rem", fontSize: "1.2rem" }}>{artwork.description}</p>
      <p style={{ fontSize: "1.4rem", color: "var(--accent)", marginTop: "1rem" }}>
        Price: {artwork.price}
      </p>

      <div style={{ marginTop: "2rem" }}>
        <button
          onClick={handleAddToCart}
          style={{
            backgroundColor: "#22c55e",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            padding: "10px 20px",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          Add to Cart
        </button>
        <button
          onClick={handleBuyNow}
          style={{
            backgroundColor: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Buy Now
        </button>
      </div>
    </section>
  );
}