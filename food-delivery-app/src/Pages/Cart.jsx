import DashboardLayout from "../Layouts/DashboardLayout";
import { useLocation, useNavigate } from "react-router-dom";
import "../Components/Dashboard/dashboard.css";

function CartPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = location.state?.cartItems || [];
  const onRemove = location.state?.onRemove || (() => {});
  const onCheckout = location.state?.onCheckout || (() => {});

  if (!cartItems || cartItems.length === 0) {
    return (
      <DashboardLayout>
        <div className="cart-page-container">
          <div className="cart-header">
            <h2>Your Cart</h2>
          </div>
          <div className="empty-cart">
            <p>Your cart is empty. Start adding items!</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  // Calculate totals
  const groupedItems = {};
  cartItems.forEach((item) => {
    if (groupedItems[item.id]) {
      groupedItems[item.id].quantity += 1;
    } else {
      groupedItems[item.id] = { ...item, quantity: 1 };
    }
  });

  const cartTotal = Object.values(groupedItems).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <DashboardLayout>
      <div className="cart-page-container">
        <div className="cart-header">
          <h2>Your Cart</h2>
        </div>
        <div className="cart-page-wrapper">
          <table className="cart-page-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Unit Price</th>
                <th>Sub-total</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(groupedItems).map((item) => (
                <tr key={item.id}>
                  <td className="cart-item-cell">
                    <div className="cart-item">
                      <img src={item.image} alt={item.name} />
                      <div className="cart-item-info">
                        <p className="cart-item-name">{item.name}</p>
                        <button
                          className="cart-remove-btn"
                          onClick={() => {
                            navigate("/dashboard");
                            onRemove(
                              cartItems.findIndex((i) => i.id === item.id),
                            );
                          }}
                        >
                          remove
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="cart-qty-cell">{item.quantity}</td>
                  <td className="cart-price-cell">
                    ₦{item.price.toLocaleString()}
                  </td>
                  <td className="cart-subtotal-cell">
                    ₦{(item.price * item.quantity).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-total-section">
            <div className="cart-total-label">Total Amount:</div>
            <div className="cart-total-amount">
              ₦{cartTotal.toLocaleString()}
            </div>
          </div>
          <div className="cart-actions">
            <button
              className="cart-checkout-btn"
              onClick={() => {
                navigate("/dashboard");
                onCheckout();
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default CartPage;
