/*
 * @lc app=leetcode.cn id=643 lang=typescript
 * @lcpr version=30113
 *
 * [643] 子数组最大平均数 I
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function findMaxAverage(nums: number[], k: number): number {
    if(nums.length < k) return 0;
    let pre = 0, after = pre + k - 1;
    let sum = 0, average = -Infinity ;
    for(let i = 0; i < nums.length; i++) {
        if(i > after) {
            sum -= nums[pre];
            pre++;
            after++;
        }
        sum += nums[i];
        if(i - pre === k - 1) {
            average = Math.max(sum / k, average);
        }
    }
    return average;
};
// @lc code=end



/*
// @lcpr case=start
// [1,12,-5,-6,50,3]\n4\n
// @lcpr case=end

// @lcpr case=start
// [5]\n1\n
// @lcpr case=end

 */

