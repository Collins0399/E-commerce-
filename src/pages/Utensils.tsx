import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../context/CartContext"; // ✅ adjust path based on your folder structure

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  description: string;
}

const utensilsData: Product[] = [
  {
    id: 1,
    name: "Cooking Pot",
    image: "https://via.placeholder.com/150",
    price: 1200,
    quantity: 10,
    description: "Durable aluminum cooking pot suitable for all types of stoves.",
  },
  {
    id: 2,
    name: "Frying Pan",
    image: "https://via.placeholder.com/150",
    price: 800,
    quantity: 15,
    description: "Non-stick frying pan for everyday cooking.",
  },
  {
    id: 3,
    name: "Serving Spoon",
    image: "https://via.placeholder.com/150",
    price: 200,
    quantity: 50,
    description: "Stainless steel serving spoon with comfortable grip.",
  },
];

const Utensils: React.FC = () => {
  const [cartQuantities, setCartQuantities] = useState<{ [key: number]: number }>({});
  const { addToCart } = useCart(); // ✅ use global cart context

  const increaseQty = (id: number) => {
    setCartQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decreaseQty = (id: number) => {
    setCartQuantities((prev) => ({
      ...prev,
      [id]: prev[id] && prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  const handleAddToCart = (item: Product) => {
    const qty = cartQuantities[item.id] || 1;
    addToCart(item, qty); // ✅ update global cart
    toast.success(`${qty} ${item.name}(s) added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="products-page">
      <h2>Utensils</h2>

      {/* Search bar */}
      <div className="filters">
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <FiSearch className="search-icon" />
        </div>
      </div>

      {/* Product list */}
      <div className="product-list">
        {utensilsData.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>
              Price: <strong>Ksh {item.price}</strong>
            </p>
            <p>Available: {item.quantity}</p>

            {/* – / + controls */}
            <div className="quantity-controls">
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{cartQuantities[item.id] || 1}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>

            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default Utensils;
