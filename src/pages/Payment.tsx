import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payment: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useCart();

  // Get order details passed from Checkout
  const { totalPrice, totalItems } = location.state || { totalPrice: 0, totalItems: 0 };

  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();

    if (!phoneNumber || !/^(?:254|\+254|0)?7\d{8}$/.test(phoneNumber)) {
      toast.error("Please enter a valid M-Pesa number", { autoClose: 2000 });
      return;
    }

    // Simulate M-Pesa payment
    toast.success("STK Push sent to your M-Pesa!", { autoClose: 3000 });

    setTimeout(() => {
      toast.success("Payment successful!", { autoClose: 2000 });
      clearCart(); // ✅ Clear cart after successful payment
      navigate("/"); // redirect to home
    }, 4000);
  };

  return (
    <div className="payment-page">
      <h2>Payment</h2>
      <p><strong>Total Items:</strong> {totalItems}</p>
      <p><strong>Total Price:</strong> Ksh {totalPrice}</p>

      <form onSubmit={handlePayment} className="payment-form">
        <label>M-Pesa Number</label>
        <input
          type="tel"
          placeholder="e.g. 0712345678"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />

        <button type="submit">Proceed to Pay</button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Payment;
