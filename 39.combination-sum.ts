/*
 * @lc app=leetcode.cn id=39 lang=typescript
 * @lcpr version=30113
 *
 * [39] 组合总和
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
    const allSelections: number[][] = [];
    // candidates.sort((a,b) => a - b);
    conbinationRecursive(target,candidates,[],0,0,allSelections);
    return allSelections;
};

function conbinationRecursive(target: number,candidates: number[],curSelection: number[],curSum:number,curPos: number, allSelections: number[][]){
    if(curSum === target) {
        allSelections.push(curSelection);
        return ;
    }
    for(let i = curPos; i < candidates.length; i++) {
        if(target - curSum  >= candidates[i]) {
            conbinationRecursive(target,
                candidates,curSelection.concat(candidates[i]),
                curSum + candidates[i],i,allSelections);
        }
    }
    return allSelections;
}
// @lc code=end



/*
// @lcpr case=start
// [2,3,6,7]\n7\n
// @lcpr case=end

// @lcpr case=start
// [2,3,5]\n8\n
// @lcpr case=end

// @lcpr case=start
// [2]\n1\n
// @lcpr case=end

 */

