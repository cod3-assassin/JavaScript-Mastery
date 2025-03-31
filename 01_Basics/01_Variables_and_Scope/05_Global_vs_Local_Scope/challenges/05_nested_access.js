function outerFunc() {
  var outer = "I am outer";

  function innerFunc() {
    console.log(outer);
  }

  innerFunc();
}

outerFunc();
