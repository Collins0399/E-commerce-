import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import './index.css'

import Navbar from "./components/Navbar"

// import Footer from "./components/Footer"

// Pages
import Home from './pages/Home'
import Products from "./pages/Products";
import Clothes from "./pages/Clothes";
import Utensils from "./pages/Utensils";
import Contact from "./pages/Contact";
import Shoes from "./pages/Shoes";
import Bags from "./pages/Bags";
import NotFoundProducts from "./pages/NotFoundProduct"
import { CartProvider } from "./context/CartContext"
// import Products from './pages/Products'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Login from "./pages/Login"
import Register from "./pages/Register"
// import About from './pages/About'
// import Terms from './pages/Terms'
// import Privacy from './pages/Privacy'
// import FAQs from './pages/FAQs'
// import Contact from './pages/Contact'

function App() {
  return (
    <CartProvider>
    <Router>
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/products/clothes" element={<Clothes />} />
          <Route path="/products/utensils" element={<Utensils />} />
          <Route path="/products/shoes" element={<Shoes />} />
          <Route path="/products/bags" element={<Bags />} />
          <Route path="/products/notfound" element={<NotFoundProducts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>
       {/* <Footer /> */}
    </Router>
    </CartProvider>
  )
}

export default App
