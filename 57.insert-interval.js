/*
 * @lc app=leetcode.cn id=57 lang=javascript
 * @lcpr version=30113
 *
 * [57] 插入区间
 */


// @lcpr-template-start

// @lcpr-template-end


// @lc code=start
/*
指出left 到 right 范围的 interval 需被merge
return [left, right] where left or right is -1 meaning no need to concern this side

*/
var find_should_merge = function (intervals, newInterval, needInsert) {

    let needConcernLeft = needInsert > 0, needConcernRight = needInsert < intervals.length
    let left = 0, right = intervals.length - 1

    if(needConcernLeft) {
        while(left<needInsert && intervals[left][1] < newInterval[0]) {left++;}
    }
    if(needConcernRight) {
        while(right>=needInsert && intervals[right][0] > newInterval[1]){
            right--;
        }
    }

    return [needConcernLeft ? left : -1, needConcernRight ? right : -1];
};
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if(intervals.length === 0) return [newInterval]
    let needInsert = intervals.findIndex(item => item[0] >= newInterval[0]) 
    needInsert = needInsert === -1 ? intervals.length : needInsert
    // console.log(needInsert)
    let [left, right] = find_should_merge(intervals, newInterval, needInsert)
    
    // console.log(left, right , needInsert) 
    // left , right -1 表明不必考虑此后区间

    let noNeedMerge = (left < 0 && right === -1) || (right < 0 && left === intervals.length)

    if(noNeedMerge) {
        console.log('noNeedMerge')
        if(needInsert === 0) {
            intervals.unshift(newInterval)
        } else {
            intervals.splice(needInsert , 0 , newInterval)
        }
        return intervals
            
    }

    let [merged_start, merged_end] = [
        Math.min(left < 0 ? intervals[intervals.length - 1][0]  :intervals[left][0], newInterval[0]),
        Math.max(right < 0 ? intervals[intervals.length - 1][1] :intervals[right][1], newInterval[1])
    ];

    if(left === right) {
        intervals[left] = [merged_start, merged_end]
    } else {
        let needMergeCount = 0
        if(right < 0) {
            needMergeCount = needInsert - left
        } else if(left < 0) {
            needMergeCount = right + 1
        } else {
            needMergeCount = (right - left + 1)
        }
        intervals.splice(Math.max(0, left), needMergeCount, [merged_start, merged_end])
    }
    
    return intervals

    
};

// @lc code=end



/*
// @lcpr case=start
// [[1,3],[6,9]]\n[2,5]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2],[3,5],[6,7],[8,10],[12,16]]\n[4,8]\n
// @lcpr case=end

// @lcpr case=start
// []\n[5,7]\n
// @lcpr case=end

// @lcpr case=start
// [[1,5]]\n[2,3]\n
// @lcpr case=end

// @lcpr case=start
// [[1,5]]\n[2,7]\n
// @lcpr case=end

// @lcpr case=start
// [[1,5]]\n[6,8]\n
// @lcpr case=end

// @lcpr case=start
// [[3,5]]\n[1,2]\n
// @lcpr case=end


 */

