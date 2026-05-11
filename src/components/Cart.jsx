function Cart({ cartItems }) {

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index}>
            {item.name} - ${item.price}
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;