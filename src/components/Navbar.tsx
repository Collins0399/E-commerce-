import { Link } from "react-router-dom";
import { useState } from "react";

import { AiOutlineHome } from "react-icons/ai"; // Home
import { FaBoxOpen, FaShoppingCart, FaUser } from "react-icons/fa"; // Products, Shop, Customer
import { MdContactMail } from "react-icons/md"; // Contact
import { RiPagesLine } from "react-icons/ri"; // Pages
import { BsFillCartCheckFill, BsFillPersonCheckFill } from "react-icons/bs"; // Cart and Checkout icons

function Navbar() {
  const [shopOpen, setShopOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [customerOpen, setCustomerOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">MiniShop</div>
      <ul className="nav-links">
        {/* Home */}
        <li>
          <Link to="/">
            <AiOutlineHome style={{ marginRight: "6px" }} />
            Home
          </Link>
        </li>

        {/* Products */}
        <li>
          <Link to="/products">
            <FaBoxOpen style={{ marginRight: "6px" }} />
            Products
          </Link>
        </li>

        {/* Shop Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setShopOpen(true)}
          onMouseLeave={() => setShopOpen(false)}
        >
          <span>
            <FaShoppingCart style={{ marginRight: "6px" }} />
            Shop ▾
          </span>
          {shopOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/cart">
                  <BsFillCartCheckFill style={{ marginRight: "6px" }} />
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/checkout">
                  <BsFillPersonCheckFill style={{ marginRight: "6px" }} />
                  Checkout
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Pages Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setPagesOpen(true)}
          onMouseLeave={() => setPagesOpen(false)}
        >
          <span>
            <RiPagesLine style={{ marginRight: "6px" }} />
            Pages ▾
          </span>
          {pagesOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
            </ul>
          )}
        </li>

        {/* Contact */}
        <li>
          <Link to="/contact">
            <MdContactMail style={{ marginRight: "6px" }} />
            Contact
          </Link>
        </li>

        {/* Customer Dropdown */}
        <li
          className="dropdown customer-dropdown"
          onMouseEnter={() => setCustomerOpen(true)}
          onMouseLeave={() => setCustomerOpen(false)}
        >
          <span>
            <FaUser style={{ marginRight: "6px" }} />
            Customer ▾
          </span>
          {customerOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
