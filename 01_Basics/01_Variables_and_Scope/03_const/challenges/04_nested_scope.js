function scopeTest() {
  const outer = "Outer";
  if (true) {
    const inner = "Inner";
    console.log(outer); // Should work
    console.log(inner); // Should work
  }
  console.log(outer); // Should work
  // console.log(inner); // Should throw ReferenceError (uncomment to test)
}
scopeTest();
