import { useState } from "react";
import "./dashboard.css";

function AddMeal({ meal, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  if (!meal) return null;

  const formattedPrice = meal.price
    ? meal.price.toLocaleString("en-NG", {
        style: "currency",
        currency: "NGN",
      })
    : "";

  const handleAddToCart = () => {
    onAddToCart(meal, quantity);
    onClose();
  };

  return (
    <div className="add-meal-overlay" onClick={onClose}>
      <div className="add-meal-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-meal-btn" onClick={onClose}>
          ×
        </button>

        <div className="meal-image-container">
          <div className="meal-image">
            <img src={meal.image || meal.img || ""} alt={meal.name} />
          </div>
        </div>

        <h2 className="meal-title">{meal.name}</h2>

        {meal.fullDescription && (
          <p className="meal-description">{meal.fullDescription}</p>
        )}

        <div className="meal-details">
          <div className="detail-item">
            <p className="detail-label">Price</p>
            <p className="detail-value">{formattedPrice}</p>
          </div>
          <div className="detail-item">
            <p className="detail-label">Delivery Time</p>
            <p className="detail-value">10-20 Mins</p>
          </div>
          <div className="detail-item">
            <p className="detail-label">Availability</p>
            <p className="detail-value">10 Pcs Avail</p>
          </div>
        </div>

        <div className="bottom-section">
          <div className="quantity-controls">
            <button
              className="qty-decrease"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              −
            </button>
            <span className="qty-display">{quantity}</span>
            <button
              className="qty-increase"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          <button className="meal-add-to-cart-btn" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddMeal;
