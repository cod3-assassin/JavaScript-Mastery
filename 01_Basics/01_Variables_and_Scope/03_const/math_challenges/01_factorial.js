function calculateFactorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}
const ans = calculateFactorial(5);
console.log(ans);
