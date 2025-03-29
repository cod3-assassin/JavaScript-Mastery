for (var i = 0; i < 3; i++) {
  (function (index) {
    setTimeout(() => console.log(index), 1000);
  })(i);
}
