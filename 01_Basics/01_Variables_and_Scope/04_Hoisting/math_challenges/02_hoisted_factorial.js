function hoistedFactorial(n) {
  return calcFact(n); // ✅ Calling the function before its declaration (hoisting works)

  function calcFact(num) {
    console.log(result); // ❌ Logs 'undefined' due to hoisting

    var result = 1; // Variable declaration and initialization

    for (var i = 2; i <= num; i++) {
      result *= i; // Multiplying numbers from 2 to num
    }

    return result; // Returning the factorial
  }
}

console.log(hoistedFactorial(4)); // Expected output: undefined, 24
