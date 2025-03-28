function fibo(n) {

    let result = [0, 1];

    for (let i = 1; i <= n; i++) {


        result.push(result[i - 1] + result[i]);


    }
    return result
}

console.log(fibo(15))

//0 ,1 ,2


function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage:
console.log(fibonacci(6)); // Output: 8 (sequence: 0, 1, 1, 2, 3, 5, 8)


function fibonacciSequence(n) {
    const sequence = [0, 1];
    if (n <= 0) return [0];
    if (n === 1) return sequence;

    for (let i = 2; i <= n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Example usage:
console.log(fibonacciSequence(6)); // Output: [0, 1, 1, 2, 3, 5, 8]