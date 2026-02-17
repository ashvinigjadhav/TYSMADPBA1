import React from "react";

function CourseCard({ title, category, short, price, image, duration, level }) {
  const formatPrice = (p) => `₹${p.toLocaleString('en-IN')}`;

  const handleAddToCart = () => {
    // Create a unique ID for each course
    const course = {
      id: Date.now(),
      title,
      price,
      image,
      category
    };

    // Get existing cart or create new
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add course
    existingCart.push(course);
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Notify and redirect
    alert(`${title} has been added to your cart!`);
    window.location.href = "/cart";
  };

  return (
    <div className="course-card">
      <img
        src={image}
        alt={title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/400x180/999999/ffffff?text=Course+Image";
        }}
      />
      <div className="course-card-content">
        <div>
          <span className="category">{category}</span>
          <h3>{title}</h3>
          <p className="short">{short}</p>
        </div>

        <div style={{ marginTop: "15px" }}>
          <p className="price">{formatPrice(price)}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
