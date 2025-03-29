function reverseNumber(num) {
  var reversed = 0; // Variable to store reversed number

  while (num > 0) {
    var lastDigit = num % 10; // Extract last digit
    reversed = reversed * 10 + lastDigit; // Build reversed number
    num = Math.floor(num / 10); // Remove last digit
  }

  return reversed;
}

console.log(reverseNumber(123)); // Should log 321
