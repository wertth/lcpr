/*
 * @lc app=leetcode.cn id=2744 lang=javascript
 * @lcpr version=30113
 *
 * [2744] 最大字符串配对数目
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let set = new Set()
    let times = 0
    words.map(item=> {
        if(set.has(reverse_str(item))) times++;
        set.add(item)
    })
    return times;
};
var reverse_str = function(str) {
    return str.split('').reverse().join('')
}
// @lc code=end



/*
// @lcpr case=start
// ["cd","ac","dc","ca","zz"]\n
// @lcpr case=end

// @lcpr case=start
// ["ab","ba","cc"]\n
// @lcpr case=end

// @lcpr case=start
// ["aa","ab"]\n
// @lcpr case=end

 */

