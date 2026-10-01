// Order totals: sum of line items (price x quantity), with an optional percentage discount.
export function orderTotal(items, discountPercent = 0) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal * (1 - discountPercent / 100);
  return Math.round(total * 100) / 100;
}
