import { useState } from "react";
import { FiSearch } from "react-icons/fi"; //icon for search field

// Sample utensils products
const utensilsData = [
  { id: 1, name: "Plate Set" },
  { id: 2, name: "Cooking Pan" },
  { id: 3, name: "Chef Knife" },
];

function Utensils() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredProducts = utensilsData.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

  return (
    <div className="products-page">
      <h2>Utensils</h2>

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

export default Utensils;
