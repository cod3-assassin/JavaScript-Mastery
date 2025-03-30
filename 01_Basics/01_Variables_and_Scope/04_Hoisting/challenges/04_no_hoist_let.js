function noHoistLet() {
  try {
    console.log(a);

    let a = 5;
  } catch (e) {
    console.log("Error:", e.message);
  }
}
noHoistLet();
