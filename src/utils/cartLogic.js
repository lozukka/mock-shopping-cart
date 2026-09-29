export function addItem(cart, product) {
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    return cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
    );
  }
  return [...cart, { ...product, quantity: 1 }];
}

export function removeFromCart(cart, id) {
  return cart.filter((item) => item.id !== id);
}

export function incrementItem(cart, id) {
  return cart.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
  );
}

export function decrementItem(cart, id) {
  return cart
    .map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
    )
    .filter((item) => item.quantity > 0);
}
