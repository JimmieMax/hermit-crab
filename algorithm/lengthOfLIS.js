function maxUpLengthArray(nums) {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  let m = 0;
  let n = nums.length - 1;
  let dp = new Array(n);
  dp[0] = 1;
  let near = 1;
  for (let i = 1; i <= n; i++) {
    if (m === i - 1) {
      if (nums[i] > nums[i - 1]) {
        dp[i] = dp[i - 1] + 1;
        m = i;
        near++;
      } else {
        dp[i] = dp[i - 1];
        near = 1;
      }
    } else {
      if (nums[i] > nums[i - 1]) {
        near++;
        if (dp[i - 1] < near) {
          dp[i] = near;
          m = i;
        } else {
          dp[i] = dp[i - 1];
        }
      } else {
        near = 1;
        dp[i] = dp[i - 1];
      }
    }
  }
  return dp[n];
}
console.log(
  "result",
  maxUpLengthArray([-2, 1, -3, 4, -1, 2, 3, 4, 6, 1, -5, 4])
);
