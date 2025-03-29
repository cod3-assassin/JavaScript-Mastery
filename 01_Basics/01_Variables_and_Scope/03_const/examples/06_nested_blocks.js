const outer = "Outer";
if (true) {
  const inner = "Inner";
  console.log(outer); // "Outer" (accessible from outer scope)
  console.log(inner); // "Inner"
}
// console.log(inner); // ReferenceError
