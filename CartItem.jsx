import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "./CartSlice";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function CartItem() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <Navbar />
      <h2>Shopping Cart</h2>

      {items.map(item => (
        <div key={item.id} className="card">
          <img src={item.img} />
          <h3>{item.name}</h3>
          <p>Unit: ${item.price}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
        </div>
      ))}

      <h3>Total Amount: ${total}</h3>
      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <br />
      <Link to="/plants">Continue Shopping</Link>
    </div>
  );
}
