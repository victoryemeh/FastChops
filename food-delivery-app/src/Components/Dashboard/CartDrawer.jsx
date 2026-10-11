function CartDrawer({ items = [], onClose, onRemove, onCheckout }) {
  // Group items by meal ID to count quantities
  const groupedItems = items.reduce((acc, item, idx) => {
    const existing = acc.find((i) => i.meal.id === item.id);
    if (existing) {
      existing.quantity += 1;
      existing.indices.push(idx);
    } else {
      acc.push({ meal: item, quantity: 1, indices: [idx] });
    }
    return acc;
  }, []);

  const total = groupedItems.reduce(
    (sum, item) => sum + (item.meal.price || 0) * item.quantity,
    0,
  );

  const formattedTotal = total.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  const handleRemoveItem = (indices) => {
    // Remove all instances of this meal
    indices.reverse().forEach((idx) => onRemove?.(idx));
  };

  return (
    <div className="cart-drawer">
      <div className="cart-header">
        <h3>Your Cart</h3>
        <button className="close-btn" onClick={onClose} aria-label="Close cart">
          ×
        </button>
      </div>

      {items.length === 0 ? (
        <p className="cart-empty">Your cart is empty</p>
      ) : (
        <div className="cart-list">
          <div className="cart-table-header">
            <div className="col-item">Item</div>
            <div className="col-qty">Qty</div>
            <div className="col-price">Unit Price</div>
            <div className="col-subtotal">Sub-total</div>
          </div>

          {groupedItems.map((item, idx) => {
            const subtotal = (item.meal.price || 0) * item.quantity;
            const formattedPrice = (item.meal.price || 0).toLocaleString(
              "en-NG",
              { style: "currency", currency: "NGN" },
            );
            const formattedSubtotal = subtotal.toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
            });

            return (
              <div key={idx} className="cart-table-row">
                <div className="col-item">
                  <div className="item-content">
                    <img
                      src={item.meal.image || item.meal.img || ""}
                      alt={item.meal.name}
                      className="item-image"
                    />
                    <div className="item-info">
                      <div className="item-name">{item.meal.name}</div>
                      <button
                        className="remove-link"
                        onClick={() => handleRemoveItem(item.indices)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-qty">{item.quantity}</div>
                <div className="col-price">{formattedPrice}</div>
                <div className="col-subtotal">{formattedSubtotal}</div>
              </div>
            );
          })}

          <div className="cart-footer">
            <div className="cart-total">
              Total: <span>{formattedTotal}</span>
            </div>
            <button className="checkout-btn" onClick={onCheckout}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartDrawer;
