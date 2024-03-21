/*
 * @lc app=leetcode.cn id=56 lang=typescript
 * @lcpr version=30113
 *
 * [56] 合并区间
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function merge(intervals: number[][]): number[][] {
    if(intervals.length <= 1) return intervals;
    intervals.sort((a,b) => a[0] - b[0]);
    const merged: number[][] = [];
    let pre = intervals[0];
    for(let i = 1; i < intervals.length; i++) {
        if(hasOverlap(pre, intervals[i])) {
            pre = mergeArrays(pre, intervals[i])
            
        } else {
            merged.push(pre.slice());
            pre = intervals[i]
        }
      
    }
    merged.push(pre.slice());
    return merged;

};

const hasOverlap = 
(interval_a: number[], interval_b: number[]): Boolean =>
{
    return interval_b[0] <= interval_a[1];
}

const mergeArrays = (interval_a: number[], interval_b: number[]) => {
    return [interval_a[0], Math.max(interval_a[1], interval_b[1])];
}
// @lc code=end



/*
// @lcpr case=start
// [[1,3],[2,6],[8,10],[15,18]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,4],[4,5]]\n
// @lcpr case=end

 */

