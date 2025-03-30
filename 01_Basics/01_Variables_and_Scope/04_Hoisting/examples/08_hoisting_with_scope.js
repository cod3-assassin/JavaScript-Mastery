var b = 1;
function outer() {
  console.log(b); // undefined
  var b = 2;
}
outer();
