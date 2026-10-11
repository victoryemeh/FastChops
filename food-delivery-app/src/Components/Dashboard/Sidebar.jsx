import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";
import logo from "../../assets/fast.png";

function Sidebar({
  cartCount = 0,
  ordersCount = 0,
  onCartClick,
  completedOrders = [],
}) {
  const navigate = useNavigate();
  const [active, setActive] = useState("Dashboard");

  const handleItemClick = (item) => {
    setActive(item);
    if (item === "Your Cart") {
      if (typeof onCartClick === "function") {
        onCartClick();
      }
      navigate("/dashboard/cart", {
        state: { cartItems, onRemove: onRemoveFromCart, onCheckout },
      });
    }
    if (item === "Orders") {
      navigate("/dashboard/orders", { state: { completedOrders } });
    }
    if (item === "Dashboard") {
      navigate("/dashboard");
    }
    if (item === "Your Profile") {
      navigate("/profile");
    }
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-img" />
        <span className="logo-text">FastChops</span>
      </div>

      <ul>
        <li
          className={active === "Dashboard" ? "active" : ""}
          onClick={() => handleItemClick("Dashboard")}
        >
          Dashboard
        </li>
        <li
          className={active === "Your Profile" ? "active" : ""}
          onClick={() => handleItemClick("Your Profile")}
        >
          Your Profile
        </li>
        <li
          className={active === "Orders" ? "active" : ""}
          onClick={() => handleItemClick("Orders")}
        >
          Orders <span className="badge">{ordersCount}</span>
        </li>
        <li
          className={active === "Your Cart" ? "active" : ""}
          onClick={() => handleItemClick("Your Cart")}
        >
          Your Cart <span className="badge">{cartCount}</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
