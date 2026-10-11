import DashboardLayout from "../Layouts/DashboardLayout";
import { useLocation } from "react-router-dom";
import "../Components/Dashboard/dashboard.css";

function OrdersPage() {
  const location = useLocation();
  const completedOrders = location.state?.completedOrders || [];

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "status-delivered";
      case "Cooking":
        return "status-cooking";
      case "Pending":
        return "status-pending";
      default:
        return "";
    }
  };

  // If no orders exist, display an empty state
  if (!completedOrders || completedOrders.length === 0) {
    return (
      <DashboardLayout>
        <div className="orders-page-container">
          <div className="orders-header">
            <h2>Your Orders</h2>
          </div>
          <div className="empty-orders">
            <p>No orders yet. Start by adding items to your cart!</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="orders-page-container">
        <div className="orders-header">
          <h2>Your Orders</h2>
        </div>
        <div className="orders-table-wrapper">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {completedOrders.map((order) =>
                order.items.map((item, itemIndex) => (
                  <tr key={`${order.id}-${itemIndex}`}>
                    <td className="order-item-cell">
                      <div className="order-item">
                        <img src={item.image} alt={item.name} />
                        <div className="order-item-info">
                          <p className="order-item-name">{item.name}</p>
                          <a href="#" className="order-remove-link">
                            remove
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="order-qty-cell">1</td>
                    <td className="order-price-cell">
                      ₦{item.price.toLocaleString()}
                    </td>
                    <td className="order-status-cell">
                      <span
                        className={`status-badge ${getStatusColor(order.status)}`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default OrdersPage;
