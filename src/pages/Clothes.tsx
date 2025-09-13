import { useState } from "react";
import { FiSearch } from "react-icons/fi"; //icon for search field

// Sample clothes products
const clothesData = [
  { id: 1, name: "T-Shirt", price: 500, image: "t-shirt.jpg" },
  { id: 2, name: "Jeans", price: 1000, image: "jeans.jpg" },
  { id: 3, name: "Jacket", price: 1500, image: "jacket.jpg" },
];

function Clothes() {


  return (
    <div className="products-page">
      <h2>Clothes</h2>

      <div className="filters">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
          />
          <FiSearch className="search-icon" />
        </div>
      </div>

      {/* <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>Category: Clothes</p>
            </div>
          ))
        ) : (
          <p>No clothes found.</p>
        )}
      </div> */}
    </div>
  );
}

export default Clothes;
