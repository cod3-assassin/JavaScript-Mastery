function testConst() {
  const a = 10;
  console.log(a);
  try {
    a = 20; // Should throw an error
  } catch (e) {
    console.log("Error:", e.message);
  }
}
testConst();
