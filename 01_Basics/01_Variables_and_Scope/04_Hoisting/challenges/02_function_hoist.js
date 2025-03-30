function callBefore() {
  greet();
}

callBefore();

function greet() {
  var hello = "Helllo from greet !";
  console.log(hello);
}
