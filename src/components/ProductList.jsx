import ProductCard from "./ProductCard";

function ProductList({ products, handleAddToCart }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Products</h2>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;