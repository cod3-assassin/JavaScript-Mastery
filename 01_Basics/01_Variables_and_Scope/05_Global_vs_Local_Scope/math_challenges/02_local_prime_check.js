function isPrimeLocal(n) {
  var isPrime = true;
  if (n < 2) {
    isPrime = false;
  }
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  console.log(isPrime);
  return isPrime;
}

isPrimeLocal(7); // true
try {
  console.log(isPrime); // Should throw error
} catch (e) {
  console.log("Error:", e.message); // "isPrime is not defined"
}
