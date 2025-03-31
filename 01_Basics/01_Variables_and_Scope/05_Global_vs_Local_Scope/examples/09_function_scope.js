function parent() {
  var parentVar = "parent";
  function child() {
    console.log(parentVar); // "parent"
  }
  child();
}
parent();
