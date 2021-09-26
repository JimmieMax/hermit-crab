function fib0(n) {
  if (n <= 2) return 1;
  return fib0(n - 1) + fib0(n - 2);
}

function fib1(n) {
  const sqrt5 = Math.sqrt(5);
  const fibN = Math.pow((1 + sqrt5) / 2, n) - Math.pow((1 - sqrt5) / 2, n);
  return Math.round(fibN / sqrt5);
}

function fib2(n) {
  const dp = [];
  dp[1] = dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

function fib3(n) {
  if (n === 2 || n === 1) return 1;
  let prev = 1,
    curr = 1;
  for (let i = 3; i <= n; i++) {
    let sum = prev + curr;
    prev = curr;
    curr = sum;
  }
  return curr;
}

console.time();
console.log(0, fib0(30));
console.timeEnd();
console.time();
console.log(1, fib1(30));
console.timeEnd();
console.time();
console.log(2, fib2(30));
console.timeEnd();
console.time();
console.log(3, fib3(30));
console.timeEnd();
