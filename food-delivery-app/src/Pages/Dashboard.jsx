import DashboardLayout from "../Layouts/DashboardLayout";
import FoodCard from "../Components/Dashboard/Foodcard";
import AddMeal from "../Components/Dashboard/AddMeal";
import CartDrawer from "../Components/Dashboard/CartDrawer";
import PaymentForm from "../Components/Dashboard/PaymentForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// example imports – place your images in `src/assets` or `public` and adjust paths
import pastaImg from "../assets/stir-fry-pasta.png";
import meatballsImg from "../assets/meat-balls.png";
import burgerImg from "../assets/burger-meal.png";
import breadCrepeImg from "../assets/bread-crepe.svg";
import soupImg from "../assets/soup.svg";
import noodlesImg from "../assets/noodles.svg";

const meals = [
  {
    id: 1,
    name: "Stir fry Pasta",
    price: 1000,
    image: pastaImg,
    description: "The in-house pasta and chicken by chef Morose",
    fullDescription:
      "Just have a single bite of this Blissful pasta and chicken and it will rock your taste buds. The savory taste of this super light, honey chicken pasta will definitely make you feel 'Wow', the perfect combination of creamy and honey chicken can provide the ultimate fulfilled taste to your pasta craving.",
  },
  {
    id: 2,
    name: "Meat Balls",
    price: 3500,
    image: meatballsImg,
    description: "Savory beef meat balls smothered in tomato sauce",
    fullDescription:
      "Tender, savory beef meatballs homemade with premium ground beef, herbs, and spices. Each meatball is carefully crafted and slow-cooked in our signature tomato sauce made from fresh tomatoes and aromatic seasonings. A classic comfort dish that's both hearty and delicious, perfect for any occasion.",
  },
  {
    id: 3,
    name: "Burger Meal",
    price: 5000,
    image: burgerImg,
    description: "Juicy burger served with fries and drink",
    fullDescription:
      "Experience our signature burger meal featuring a flame-grilled patty with premium toppings including lettuce, tomato, onions, and our special house sauce. Served with crispy hand-cut fries and your choice of cold beverage. A complete satisfying meal that's made fresh to order.",
  },
  {
    id: 4,
    name: "Bread Crepe",
    price: 2500,
    image: breadCrepeImg,
    description: "Sweet crepe stuffed in soft bread",
    fullDescription:
      "A delightful combination of soft, fluffy bread layered with delicate crepes and filled with sweet cream, fresh fruits, and a drizzle of chocolate. This dessert brings together the best of both worlds - the lightness of crepes with the comfort of warm bread.",
  },
  {
    id: 5,
    name: "Soup Bowl",
    price: 1500,
    image: soupImg,
    description: "Warm vegetable soup to soothe your soul",
    fullDescription:
      "A nourishing blend of fresh seasonal vegetables simmered in a flavorful broth to create a warm, comforting soup. Packed with vitamins and minerals, this wholesome soup is both healthy and delicious. Perfect for a light meal or as a side to complement your main course.",
  },
  {
    id: 6,
    name: "Noodles",
    price: 3000,
    image: noodlesImg,
    description: "Stir fried noodles with mixed veggies",
    fullDescription:
      "Perfectly stir-fried noodles tossed with a vibrant mix of fresh vegetables including bell peppers, broccoli, carrots, and snap peas. Seasoned with aromatic spices and a savory sauce, this dish offers a perfect balance of flavors and textures that will delight your palate.",
  },
];

function Dashboard() {
  const navigate = useNavigate();
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showPayment, setShowPayment] = useState(false);

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
  };

  const addToCart = (meal, quantity = 1) => {
    for (let i = 0; i < quantity; i++) {
      setCartItems((prev) => [...prev, meal]);
    }
    setShowCart(true);
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + (item.price || 0),
    0,
  );

  const ordersCount = completedOrders.length;

  const handleOpenCart = () => setShowCart(true);

  const handleCheckout = () => {
    setShowCart(false);
    setShowPayment(true);
  };

  const handlePaymentComplete = () => {
    // Add current cart items to completed orders
    if (cartItems.length > 0) {
      const newOrder = {
        id: completedOrders.length + 1,
        items: cartItems,
        total: totalAmount,
        date: new Date().toLocaleDateString(),
        status: "Cooking",
      };
      setCompletedOrders((prev) => [...prev, newOrder]);
    }
    setCartItems([]);
    setShowCart(false);
    setShowPayment(false);
    // Navigate to orders page after successful payment
    navigate("/dashboard/orders", {
      state: {
        completedOrders: [
          ...completedOrders,
          {
            id: completedOrders.length + 1,
            items: cartItems,
            total: totalAmount,
            date: new Date().toLocaleDateString(),
            status: "Cooking",
          },
        ],
      },
    });
  };

  return (
    <DashboardLayout
      cartCount={cartItems.length}
      ordersCount={ordersCount}
      onCartClick={handleOpenCart}
      completedOrders={completedOrders}
      cartItems={cartItems}
      onRemoveFromCart={removeFromCart}
      onCheckout={handleCheckout}
    >
      <div className="food-grid">
        {meals.map((meal) => (
          <FoodCard
            key={meal.id}
            meal={meal}
            onAdd={() => handleMealClick(meal)}
          />
        ))}
      </div>

      {selectedMeal && (
        <AddMeal
          meal={selectedMeal}
          onClose={() => setSelectedMeal(null)}
          onAddToCart={addToCart}
        />
      )}

      {showCart && (
        <div className="cart-overlay">
          <CartDrawer
            items={cartItems}
            onClose={() => setShowCart(false)}
            onRemove={removeFromCart}
            onCheckout={handleCheckout}
          />
        </div>
      )}

      {showPayment && (
        <PaymentForm
          total={totalAmount}
          onClose={() => setShowPayment(false)}
          onPaymentComplete={handlePaymentComplete}
        />
      )}
    </DashboardLayout>
  );
}

export default Dashboard;
