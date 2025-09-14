import { FiSearch } from "react-icons/fi"; // search icon
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Products() {
    
    // On selecting a category , it navigate to that category page
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("");

  const handleSearch = () => {
  const lower = searchTerm.trim().toLowerCase(); // remove spaces + lowercase

 const categoryRoutes: Record<string, string> = {
  clothes: "/products/clothes",
  utensils: "/products/utensils",
  shoes: "/products/shoes",
  bags: "/products/bags",
};


  if (categoryRoutes[lower]) {
    setMessage(""); // clear error
    navigate(categoryRoutes[lower]); // go to matching route
  } else {
    navigate("/products/notfound");
  }

  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    if (selected === "Utensils") {
      navigate("./utensils");
    } else if (selected === "Clothes") {
      navigate("./clothes");
    } else if (selected === "Shoes") {
      navigate("./shoes");
    } else if (selected === "Bags") {
      navigate("./bags");
    } else {
      navigate("./products"); // default for All
    }

    // Reset search term or other filters if needed
  };

  return (
    <div className="products-page">
      <h2>Our Products</h2>

      {/* Filters */}
      <div className="filters">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setMessage(""); // reset message on typing
    }}
     onKeyDown={(e) => {
      if (e.key === "Enter") {
        handleSearch(); 
      }
    }}
          />
          <FiSearch className="search-icon" onClick={handleSearch} size={20} />
        </div>
        {message && <p className="text-red-500">{message}</p>}
        <select className="category-select" onChange={handleCategoryChange}>
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
