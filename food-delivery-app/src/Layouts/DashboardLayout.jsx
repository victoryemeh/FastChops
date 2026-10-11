import "../Components/Dashboard/dashboard.css";
import Sidebar from "../Components/Dashboard/Sidebar";
import Header from "../Components/Dashboard/Header";

function DashboardLayout({
  children,
  cartCount = 0,
  ordersCount = 0,
  onCartClick,
  userName,
  completedOrders = [],
  cartItems = [],
  onRemoveFromCart = () => {},
  onCheckout = () => {},
}) {
  return (
    <div className="dashboard">
      <Sidebar
        cartCount={cartCount}
        ordersCount={ordersCount}
        onCartClick={onCartClick}
        completedOrders={completedOrders}
        cartItems={cartItems}
        onRemoveFromCart={onRemoveFromCart}
        onCheckout={onCheckout}
      />
      <div className="dashboard-main">
        <Header userName={userName} />
        <div className="dashboard-content">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
