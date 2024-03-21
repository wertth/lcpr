/*
 * @lc app=leetcode.cn id=64 lang=typescript
 * @lcpr version=30112
 *
 * [64] 最小路径和
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function minPathSum(grid: number[][]): number {
    const m_len = grid.length;
    const n_len = grid[0].length;
    let dp: number[][] = new Array(m_len).fill(0).map(() => new Array(n_len).fill(0));
    dp[0][0] = grid[0][0];
    // initialize
    for(let row = 1; row < m_len; row++) {
        dp[row][0] = dp[row-1][0] + grid[row][0];
    }
    for(let col = 1; col < n_len; col++) {
        dp[0][col] = dp[0][col-1] + grid[0][col];
    }

    for(let row = 1; row < m_len; row++) {
        for(let col = 1; col < n_len; col++) {
            dp[row][col] = Math.min(dp[row-1][col], dp[row][col-1]) + grid[row][col];
        }
    }
    return dp[m_len -1][n_len-1];
};
// @lc code=end



/*
// @lcpr case=start
// [[1,3,1],[1,5,1],[4,2,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3],[4,5,6]]\n
// @lcpr case=end

 */

