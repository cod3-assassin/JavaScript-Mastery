function sumOfEvens(n) {
  var sum = 0; // Declare sum outside the loop to store the total sum

  for (var i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      // Check if i is even
      sum += i; // Add the even number to sum
    }
  }

  return sum; // Return the total sum
}

console.log(sumOfEvens(6)); // Should log 12

function sumOfEvensComplete(n) {
  var sum = 0; // Store total sum
  var output = ""; // Store formatted string

  for (var i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      // Check if i is even
      sum += i;

      if (output === "") {
        output += i; // First number (no "+" before it)
      } else {
        output += " + " + i; // Append numbers with " + "
      }
    }
  }

  console.log(output + " = " + sum); // Print final result
}

sumOfEvensComplete(12); // Should log: "0 + 2 + 4 + 6 = 12"
