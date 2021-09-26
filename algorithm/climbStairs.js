function climbStairs(n) {
  if (n === 1) return 1;
  let dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; ++i) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(10));
