import "./dashboard.css";

function FoodCard({ meal, onAdd }) {
  // format price using locale to include comma separators and decimal places
  const formattedPrice = meal.price
    ? meal.price.toLocaleString("en-NG", {
        style: "currency",
        currency: "NGN",
      })
    : "";

  return (
    <div className="food-card">
      <div className="food-img">
        <img src={meal.image || meal.img || ""} alt={meal.name} />
      </div>
      <h4>{meal.name}</h4>
      {meal.description && <p className="desc">{meal.description}</p>}

      <div className="price-add">
        <p className="price">{formattedPrice}</p>
        <button className="add-btn" onClick={() => onAdd?.(meal)}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
