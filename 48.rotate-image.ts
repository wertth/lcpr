/*
 * @lc app=leetcode.cn id=48 lang=typescript
 * @lcpr version=30112
 *
 * [48] 旋转图像
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
 function rotate(matrix:number[][]) {
    let n = matrix.length;

    for (let layer = 0; layer < n / 2; layer++) {
        let first = layer;
        let last = n - 1 - layer;
        for (let i = first; i < last; i++) {
            let offset = i - first;

            // 保存上边
            let top = matrix[first][i];

            // 左边移到上边
            matrix[first][i] = matrix[last - offset][first];

            // 下边移到左边
            matrix[last - offset][first] = matrix[last][last - offset];

            // 右边移到下边
            matrix[last][last - offset] = matrix[i][last];

            // 上边移到右边
            matrix[i][last] = top;
        }
    }
}

// @lc code=end



/*
// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]\n
// @lcpr case=end

 */

