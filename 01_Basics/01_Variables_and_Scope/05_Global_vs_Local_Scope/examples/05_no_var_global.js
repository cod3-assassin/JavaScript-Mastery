function setGlobal() {
  implicitGlobal = 25; // No 'var', becomes global
}
setGlobal();
console.log(implicitGlobal); // 25

function theGlobal() {
  thegolobalvar = 34;
}

theGlobal();
console.log(thegolobalvar);
