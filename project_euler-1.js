// Project Euler 1: "Find the sum of all the multiples of 3 or 5 below 1000."

var sum = 0;

for (var counter = 1; counter < 1000; counter++) {
    if (counter % 3 === 0) {
        sum = sum + counter;
    } else if (counter % 5 === 0) {
        sum = sum + counter;
    }
}

console.log(sum);