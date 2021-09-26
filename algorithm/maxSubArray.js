function maxSubArray(nums) {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  let n = nums.length;
  let dp = new Array(n);
  dp[0] = nums[0];
  let result = dp[0];
  for (let i = 1; i < n; ++i) {
    dp[i] = Math.max(dp[i - 1], 0) + nums[i];
    result = Math.max(result, dp[i]);
  }
  return result;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 3, 4, 6, 1, -5, 4]));
