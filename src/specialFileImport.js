// const modules = import.meta.glob("./utils/*.js", { as: "raw", eager: true });
const modules = import.meta.glob("./utils/*.js", {
  eager: true,
  import: "name",
});

console.log(modules);

// document.addEventListener("click", () => {
//   Object.values(modules).forEach((module) => {
//     module()
//       .then((name) => {
//         console.log(name);
//       })
//       .catch((err) => console.log(err));
//   });
// });
