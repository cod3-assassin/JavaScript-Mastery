function sumOfSquares(n) {
  let sum = 0; // Initialize sum

  for (let i = 1; i <= n; i++) {
    const square = i * i; // Use const for immutability
    sum += square; // Correct accumulation of squares
  }

  return sum; // Return final sum
}

const result = sumOfSquares(3);
console.log(result); // Expected Output: 14
