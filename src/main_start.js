import "./logger.js";
import "./displayLog.js";
import "./assets/styles.css";
import "./assets/example_001.css";
import "./assets/example_002.css";
// import styles from "./assets/styles.css?inline";
import stylesExercise_003 from "./assets/exercise_003.module.css";

import { borderRadius as borderRound } from "./assets/exercise_003.module.css";

import collect from "collect.js";
const avarage = collect([1, 2, 3, 4]).avg();
console.log("Avarage: ", avarage);

console.log(stylesExercise_003);

// const styleElement = document.createElement("style");
// styleElement.innerText = styles;
// document.querySelector("head").appendChild(styleElement);

// document.querySelector(
//   ".heading"
// ).className = `${stylesExercise_003.heading} ${stylesExercise_003.border2px}`;
document.querySelector(".heading").className = [
  stylesExercise_003.heading,
  stylesExercise_003.border2px,
  borderRound,
].join(" ");
