import { useCart } from "../context/CartContext";

const Cart: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} width={80} />
              <div>
                <h3>{item.name}</h3>
                <p>Qty: {item.cartQuantity}</p>
                <p>Price: Ksh {item.price * item.cartQuantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
