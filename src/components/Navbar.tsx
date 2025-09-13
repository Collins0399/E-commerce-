import { Link } from "react-router-dom"
import { useState } from "react"

function Navbar() {
  const [shopOpen, setShopOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-logo">ShopEase</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>

        <li 
          className="dropdown"
          onMouseEnter={() => setShopOpen(true)}
          onMouseLeave={() => setShopOpen(false)}
        >
          <span>Shop ▾</span>
          {shopOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/checkout">Checkout</Link></li>
            </ul>
          )}
        </li>

        <li 
          className="dropdown"
          onMouseEnter={() => setPagesOpen(true)}
          onMouseLeave={() => setPagesOpen(false)}
        >
          <span>Pages ▾</span>
          {pagesOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
