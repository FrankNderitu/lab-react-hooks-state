import { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

function App() {

  // ================= DARK MODE STATE =================
  const [darkMode, setDarkMode] = useState(false);

  // ================= CART STATE =================
  const [cartItems, setCartItems] = useState([]);

  // ================= CATEGORY FILTER =================
  const [category, setCategory] = useState("All");

  // ================= PRODUCTS =================
  const products = [
    {
      id: 1,
      name: "Apple",
      price: 2,
      category: "Fruits",
    },
    {
      id: 2,
      name: "Banana",
      price: 1,
      category: "Fruits",
    },
    {
      id: 3,
      name: "Milk",
      price: 4,
      category: "Dairy",
    },
    {
      id: 4,
      name: "Cheese",
      price: 6,
      category: "Dairy",
    },
  ];

  // ================= ADD TO CART =================
  function handleAddToCart(product) {
    setCartItems((prevItems) => [...prevItems, product]);
  }

  // ================= FILTER PRODUCTS =================
  const filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>Shopping App</h1>

      {/* DARK MODE BUTTON */}
      <DarkModeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* CATEGORY FILTER */}
      <div style={{ marginTop: "20px" }}>
        <label>Filter Category: </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      {/* PRODUCT LIST */}
      <ProductList
        products={filteredProducts}
        handleAddToCart={handleAddToCart}
      />

      {/* CART */}
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;