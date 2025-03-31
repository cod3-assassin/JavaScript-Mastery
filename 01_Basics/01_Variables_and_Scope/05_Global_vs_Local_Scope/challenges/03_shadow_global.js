var global = "I am global";

function shadowGlobal() {
  var global = "I am shadowing";
  console.log(global);
}
shadowGlobal();
console.log(global);
