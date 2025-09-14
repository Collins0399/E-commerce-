import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../context/CartContext"; // adjust path if needed

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  description: string;
}

const bagsData: Product[] = [
  {
    id: 1,
    name: "Leather Handbag",
    image: "https://via.placeholder.com/150",
    price: 4000,
    quantity: 12,
    description: "Elegant leather handbag suitable for daily use.",
  },
  {
    id: 2,
    name: "Backpack",
    image: "https://via.placeholder.com/150",
    price: 2500,
    quantity: 20,
    description: "Durable and spacious backpack for school or travel.",
  },
  {
    id: 3,
    name: "Clutch Bag",
    image: "https://via.placeholder.com/150",
    price: 1500,
    quantity: 15,
    description: "Stylish clutch bag for special occasions.",
  },
];

const Bags: React.FC = () => {
  const [cartQuantities, setCartQuantities] = useState<{ [key: number]: number }>({});
  const { addToCart } = useCart();

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
    addToCart(item, qty);
    toast.success(`${qty} ${item.name}(s) added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="products-page">
      <h2>Bags</h2>

      {/* Search bar */}
      <div className="filters">
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <FiSearch className="search-icon" />
        </div>
      </div>

      {/* Product list */}
      <div className="product-list">
        {bagsData.map((item) => (
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

      <ToastContainer />
    </div>
  );
};

export default Bags;
