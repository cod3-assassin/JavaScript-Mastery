var a = 20;
function shadow() {
  var a = 30; // Shadows global 'a'
  console.log(a); // 30
}
shadow();
console.log(a); // 20
