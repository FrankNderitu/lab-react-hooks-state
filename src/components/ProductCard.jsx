function ProductCard({ product, handleAddToCart }) {

  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h3>{product.name}</h3>

      <p>Price: ${product.price}</p>

      <p>Category: {product.category}</p>

      <button onClick={() => handleAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;