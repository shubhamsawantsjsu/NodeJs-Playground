console.time('fibonacci');
function fibonacci(n) {
    if (n < 2)
        return 1;
    else
        return fibonacci(n - 2) + fibonacci(n - 1);
}
fibonacci(44);             // modify this number based on your system performance
console.timeEnd('fibonacci');

/*
Output:
fibonacci: 13272.635ms
*/
