import { FiSearch } from "react-icons/fi"; // search icon

function Products() {
  return (
    <div className="products-page">
      <h2>Our Products</h2>

      {/* Filters */}
      <div className="filters">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
          />
          <FiSearch className="search-icon" />
        </div>

        <select className="category-select">
          <option value="All">All Categories</option>
          <option value="Utensils">Utensils</option>
          <option value="Clothes">Clothes</option>
          <option value="Shoes">Shoes</option>
          <option value="Bags">Bags</option>
        </select>
      </div>
    </div>
  );
}

export default Products;
