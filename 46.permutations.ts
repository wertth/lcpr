/*
 * @lc app=leetcode.cn id=46 lang=typescript
 * @lcpr version=30112
 *
 * [46] 全排列
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function permute(nums: number[]): number[][] {
    let res = []
    backTrack(nums, [], res)
    return res;
};

function backTrack(choices: number[], cur: number[], allSolutions: number[][]): void {
    if(cur.length === choices.length) {
        allSolutions.push(cur.slice())
        return;
    }

    for(const choice of choices) {
        if(cur.includes(choice)) continue;
        cur.push(choice);
        backTrack(choices, cur, allSolutions);
        cur.pop();
    }
}
// @lc code=end



/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0,1]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

