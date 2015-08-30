// Project Euler Problem 2: Sum of fibonacci numbers not exceeding 4,000,000

var first = 0;
var second = 1;
var sumEvens = 0;

for (i = 1; i <= 4000000; i++) {
    num = first + second;
    if ((num) % 2 === 0) {
        console.log(num);
        sumEvens += num;
    }
    first = second;
    second = num;
    i = second;
    // console.log("[" + i + "]");
}
console.log("Sum of Even Fibonacci numbers not exceeding 4,000,000:  " + sumEvens);