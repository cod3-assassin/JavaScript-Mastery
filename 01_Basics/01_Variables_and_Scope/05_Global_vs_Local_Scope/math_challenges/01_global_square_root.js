var approximation; // Global variable

function approxSquareRoot(n) {
  // If the approximation hasn't been set yet, initialize it
  if (approximation === undefined) {
    approximation = n / 2;
  }

  // Update the approximation using the formula
  approximation = (approximation + n / approximation) / 2;

  // Print the updated approximation
  console.log(approximation);
}

// Call the function multiple times to refine the result
approxSquareRoot(16); // First call → initial approximation (e.g., 8)
approxSquareRoot(16); // Second call → improved approximation (e.g., 5.18)
approxSquareRoot(16); // Third call → even better (e.g., 4.52)
approxSquareRoot(16); // Keeps improving towards √16 = 4
