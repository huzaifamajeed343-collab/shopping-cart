import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const items = useSelector(state => state.cart.items);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/plants"> Plants</Link> | 
      <Link to="/cart"> Cart ({count})</Link>
    </nav>
  );
}
