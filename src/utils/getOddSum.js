export function getOddSum(...numbers) {
  return numbers
    .filter((number) => number % 2 !== 0)
    .reduce((sum, number) => sum + number, 0);
}
export const name = "getOddSum";
export const oddSum = getOddSum(1, 3, 4, 5, 6);
export default `${oddSum}`;
