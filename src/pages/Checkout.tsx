import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout: React.FC = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  // Check if user is logged in (using sessionStorage now)
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser") || "null");

  // Calculate totals
  const totalItems = cart.reduce((sum, item) => sum + item.cartQuantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.cartQuantity * item.price,
    0
  );

  const handlePlaceOrder = () => {
    if (!currentUser) {
      toast.info("Please login or register to place your order.", {
        position: "top-right",
        autoClose: 3000,
      });
      navigate("/login");
      return;
    }

    if (cart.length === 0) {
      toast.warning("Your cart is empty!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    toast.success(`Order placed successfully! Total: Ksh ${totalPrice}`, {
      position: "top-right",
      autoClose: 3000,
    });

    clearCart();
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      {!currentUser ? (
        <div className="login-warning">
          <p>Please <strong>login</strong> or <strong>register</strong> to place your order.</p>
          <button onClick={() => navigate("/login")}>Login / Register</button>
        </div>
      ) : cart.length === 0 ? (
        <p>Your cart is empty. Add items before proceeding to checkout.</p>
      ) : (
        <div>
          <div className="checkout-items">
            {cart.map((item) => (
              <div key={item.id} className="checkout-item">
                <img src={item.image} alt={item.name} width={70} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Qty: {item.cartQuantity}</p>
                  <p>Price: Ksh {item.price * item.cartQuantity}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-summary">
            <h3>Order Summary</h3>
            <p>Total Items: {totalItems}</p>
            <p>Total Price: <strong>Ksh {totalPrice}</strong></p>
            <button onClick={handlePlaceOrder}>Place Order</button>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default Checkout;
