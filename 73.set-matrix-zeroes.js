/*
 * @lc app=leetcode.cn id=73 lang=javascript
 * @lcpr version=30113
 *
 * [73] 矩阵置零
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const [m , n] = [matrix.length, matrix[0].length];
    const hasViewed = Array.from({length: m}, ()=>new Array(n).fill(false))
    // console.log(m, n , hasViewed)
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j ++) {
            if(0 === matrix[i][j] && !hasViewed[i][j]) {
                setZeros_recursive(matrix, i, j, m, n, hasViewed, 15)
                // console.log('core', i , j)
            }
        }
    }
};
const meet_core_zero = (val, code) => (val === 0 && code !== 15)
// 0000 分别是否上、下、左、右 flag
var setZeros_recursive = function(matrix, i , j , m , n, hasViewed, code) {
    //if(i === 0 && j === 0) console.log(hasViewed[i][j], matrix, i , j , m , n, hasViewed, code)
    if(i < 0 || i >= m || j < 0 || j >= n) return;
    if(!meet_core_zero(matrix[i][j], code)) {
        matrix[i][j] = 0;
        hasViewed[i][j] = true
    } 

    if(code & 1) {
        setZeros_recursive(matrix, i, j + 1, m , n, hasViewed, 1);
    }
    if(code & 2 ) {
        setZeros_recursive(matrix, i, j - 1, m , n, hasViewed, 2 );
    }
    if(code & 4) {
        setZeros_recursive(matrix, i + 1, j, m , n, hasViewed, 4);
    }
    if(code & 8) {
        setZeros_recursive(matrix, i - 1, j, m , n, hasViewed, 8);
    }
}
setZeroes([[1,2,3,4],[5,0,7,8],[0,10,11,12],[13,14,15,0]])
// @lc code=end



/*
// @lcpr case=start
// [[1,1,1],[1,0,1],[1,1,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[0,1,2,0],[3,4,5,2],[1,3,1,5]]\n
// @lcpr case=end

 */

