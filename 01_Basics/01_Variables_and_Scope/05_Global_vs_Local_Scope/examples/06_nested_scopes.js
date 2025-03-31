var outer = 1;
function outerFunc() {
  var inner = 2;
  console.log(outer); // 1
  console.log(inner); // 2
}
outerFunc();
