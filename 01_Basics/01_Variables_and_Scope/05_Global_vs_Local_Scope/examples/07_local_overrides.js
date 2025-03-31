var x = 100;
function override() {
  var x = 200;
  console.log(x); // 200
}
override();
console.log(x); // 100
