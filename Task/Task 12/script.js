let P = 10000;
let r = 0.05;
let n = 1;
let t = 3;

let A = P * Math.pow(1 + r / n, n * t);

console.log("The compound interest after 3 years is: " + A);
