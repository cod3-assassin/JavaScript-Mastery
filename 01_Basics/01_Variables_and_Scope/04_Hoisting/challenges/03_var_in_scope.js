function scopeHoist() {
  console.log(a);
  var a;

  a = "Hoisting in scope";

  console.log(a);
}
scopeHoist();
