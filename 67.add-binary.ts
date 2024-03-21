/*
 * @lc app=leetcode.cn id=67 lang=typescript
 * @lcpr version=30112
 *
 * [67] 二进制求和
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function addBinary(a: string, b: string): string {
    let res: string = '', resArr:Array<number> = []
    a.length < b.length ? a = '0'.repeat(b.length - a.length) + a : b = '0'.repeat(a.length - b.length) + b;
    let carry = 0
    for(let i = b.length - 1; i >= 0; i--) {
        const aChar = parseInt(a[i]);
        const bChar = parseInt(b[i]);
        resArr.unshift(aChar ^ bChar ^ carry);
        (aChar + bChar + carry > 1) ? carry = 1 : carry = 0;
    }
    if(carry) resArr.unshift(1)
    return resArr.join('')
};
// @lc code=end



/*
// @lcpr case=start
// "11"\n"1"\n
// @lcpr case=end

// @lcpr case=start
// "1010"\n"1011"\n
// @lcpr case=end

 */

