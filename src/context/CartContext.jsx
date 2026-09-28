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
 */
