import { template } from "./jsx_markup.jsx";

// console.log(template.outerHTML);

const rootElement = document.querySelector("#app");
rootElement.innerHTML = template.outerHTML;
