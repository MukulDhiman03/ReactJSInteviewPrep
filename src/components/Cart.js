import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log("Cartitem ", cartItems);
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className=" bg-gray-200 p-4 rounded-lg"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
      <div>
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
