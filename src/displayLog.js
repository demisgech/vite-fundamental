import "./logger.js";
import collect from "collect.js";
const isFound = collect([1, 2, 3, 4, 5]).contains(3);
console.log(isFound);
