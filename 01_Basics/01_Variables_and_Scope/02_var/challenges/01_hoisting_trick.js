function hoistExample() {
  console.log(a); // What’s the output?
  var a = 100;
  console.log(a); // What’s the output?
}
hoistExample();
