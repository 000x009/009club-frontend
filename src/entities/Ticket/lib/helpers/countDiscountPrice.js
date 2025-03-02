export function countDiscountPrice(price, discount_percentage) {
  price = price - (price / 100) * discount_percentage;
  return parseFloat(price).toFixed(2);
}
