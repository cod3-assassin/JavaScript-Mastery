for (const i = 0; i < 3; i++) {
  console.log(i); // TypeError: Assignment to constant variable (i++ fails)
}
// Compare with let: for (let i = 0; i < 3; i++) works
