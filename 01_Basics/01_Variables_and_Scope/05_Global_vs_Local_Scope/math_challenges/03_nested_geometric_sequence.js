function geometricSequence(n) {
  var startValue = 2;
  var commonRatio = 2;
  var arr = [];

  function buildSequence() {
    var value = startValue;
    for (var i = 0; i < n; i++) {
      arr.push(value);
      value *= commonRatio; // Multiply previous value by ratio
    }
  }

  buildSequence();
  return arr;
}

console.log(geometricSequence(4)); // [2, 4, 8, 16]
