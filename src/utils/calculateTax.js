export function calculateTax(price, taxRate) {
  return price * taxRate;
}

export const tax = calculateTax(120, 1.2);
export const name = "calculateTax";
export default `${tax}`;
