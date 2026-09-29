/*
Cart State Shape:
item: {id
quantity
thumbnail
title
price}
Derived: total, itemCount

Edge cases:
-Add item already in the cart: inc quantity
-Dec at quantity 1: it removes the item and changes back to "Add to cart"
-Remove: deletes all the items regardless of quantity
-Prices: format only when displaying; total.toFixed(2)

Functions:
addToCart(product), removeFromCart(id), incrementQty(id), decrementQty(id)
total, itemCount
 */
import { createContext, useState } from "react";
import {
  addItem,
  removeFromCart,
  incrementItem,
  decrementItem,
} from "../utils/cartLogic";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart((prev) => addItem(prev, product));
  const removeItem = (id) => setCart((prev) => removeFromCart(prev, id));
  const incrementQty = (id) => setCart((prev) => incrementItem(prev, id));
  const decrementQty = (id) => setCart((prev) => decrementItem(prev, id));

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        incrementQty,
        decrementQty,
        total,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
