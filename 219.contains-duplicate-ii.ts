/*
 * @lc app=leetcode.cn id=219 lang=typescript
 * @lcpr version=30113
 *
 * [219] 存在重复元素 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    if(k === 0) return false;
    let pre = 0, after = (pre + k) >=  nums.length ? nums.length - 1 : pre + k;
    if(after === pre) return false;
    let set = new Set();
    for(let i = 0; i < nums.length; i++) {
        if(i - pre > k) {
            set.delete(nums[pre]);
            pre++;
            after++;
        }
        if(set.has(nums[i])) return true;
        set.add(nums[i]);
    }
    return false
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,1]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1,0,1,1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,1,2,3]\n2\n
// @lcpr case=end

 */

