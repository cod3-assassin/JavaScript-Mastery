function counter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}

const increment = counter();
increment(); // ✅ Output: 1
increment(); // ✅ Output: 2

increment()
increment()
increment()
increment()