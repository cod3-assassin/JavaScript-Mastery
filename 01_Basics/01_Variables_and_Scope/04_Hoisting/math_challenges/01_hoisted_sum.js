function hoistedSum(n) {
  console.log(sum); // ❌ Logs 'undefined' due to hoisting

  var sum = 0; // Variable declaration and initialization

  for (var i = 1; i <= n; i++) {
    sum += i; // Adding numbers from 1 to n
  }

  console.log(sum); // ✅ Logs the final sum
}

hoistedSum(3); // Expected output: undefined, 6
