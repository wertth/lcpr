/*
 * @lc app=leetcode.cn id=50 lang=typescript
 * @lcpr version=30112
 *
 * [50] Pow(x, n)
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function myPow(x: number, n: number): number {
    if(x === 0) return 0;
    if(n === 0) return 1;

    if(n  <  0) {
        x = 1 / x;
        n = -1*n;
    }
    console.log(x, n);
    const half = myPow(x, Math.floor(n / 2));
    const res =  n % 2 === 0 ?
                half * half :
                x*half*half;
    return res;
};
// @lc code=end



/*
// @lcpr case=start
// 2.00000\n10\n
// @lcpr case=end

// @lcpr case=start
// 2.10000\n3\n
// @lcpr case=end

// @lcpr case=start
// 2.00000\n-2\n
// @lcpr case=end

 */

