import { useState } from "react";
import { FiSearch } from "react-icons/fi"; //icon for search field

// Sample shoes products
const shoesData = [
  { id: 1, name: "Sneakers", price: 500, image: "sneakers.jpg" },
  { id: 2, name: "Boots", price: 1000, image: "boots.jpg" },
  { id: 3, name: "Sandals", price: 1500, image: "sandals.jpg" },
];

function Shoes() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = shoesData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-page">
      <h2>Shoes</h2>

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

export default Shoes;
