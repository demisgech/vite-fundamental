// import "./style.css";
// import "./assets/example_005.sass";
import styles from "./assets/example_005.module.sass";
// import jsonData from "./utils/users.json";
import jsonData from "./utils/users.json?url";

import imageUrl from "./assets/images/javascript.svg";

console.log(styles);

document.body.className = styles.wrapper;
console.log(jsonData);

console.log(imageUrl);

document.getElementById("image").src = imageUrl;
