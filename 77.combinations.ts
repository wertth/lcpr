/*
 * @lc app=leetcode.cn id=77 lang=typescript
 * @lcpr version=30112
 *
 * [77] 组合
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function combine(n: number, k: number): number[][] {
    const res = [];
    backtrack(k, n, [], 1 , res);
    return res;
};

function backtrack(k: number,choices: number, cur: number[], cur_selected_max ,allSlution: number[][]){
    if(cur.length == k) {
        allSlution.push(cur.slice());
        return;
    }

    for(let choice = cur_selected_max; choice <= choices; choice++) {
        if(cur.includes(choice)) continue;
        cur.push(choice);
        backtrack(k, choices, cur, choice ,allSlution);
        cur.pop();
    }
    return allSlution;
}
// @lc code=end



/*
// @lcpr case=start
// 4\n2\n
// @lcpr case=end

// @lcpr case=start
// 1\n1\n
// @lcpr case=end

 */

