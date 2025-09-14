import { useState } from "react";
import { FiSearch } from "react-icons/fi"; //icon for search field

// Sample bags products
const bagsData = [
  { id: 1, name: "Shoulder bags", price: 500, image: "shoulder_bags.jpg" },
  { id: 2, name: "Crossbody bags", price: 1000, image: "crossbody_bags.jpg" },
  { id: 3, name: "Top handle bags", price: 1500, image: "top_handle_bags.jpg" },
];

function Bags() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = bagsData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-page">
      <h2>Bags</h2>

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

export default Bags;
