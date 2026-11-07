export function total(price, qty) {
  if (qty < 0) {
    throw new RangeError("qty must not be negative");
  }
  return price * qty;
}
