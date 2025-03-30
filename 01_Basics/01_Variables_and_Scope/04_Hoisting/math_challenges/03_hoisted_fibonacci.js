function hoistedFibonacci(n) {
  console.log(fibArray); // ❌ Logs 'undefined' due to hoisting

  var fibArray = [0, 1]; // ✅ Variable declaration and initialization

  for (var i = 2; i < n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2]; // Fibonacci formula
  }

  return fibArray; // Returns the Fibonacci sequence up to 'n' terms
}

console.log(hoistedFibonacci(5)); // Expected output: undefined, [0, 1, 1, 2, 3]
