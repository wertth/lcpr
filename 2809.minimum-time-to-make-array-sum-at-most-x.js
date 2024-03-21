/*
 * @lc app=leetcode.cn id=2809 lang=javascript
 * @lcpr version=30113
 *
 * [2809] 使数组和小于等于 x 的最少时间
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

Array.prototype.sum = function() {
    return this.reduce((pre, cur) => pre + cur, 0);
}
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} x
 * @return {number}
 */
// 某种单一的策略，部分错误解
// const eachAdd = (nums1, nums2, position) => {
//     for(let index in nums1) {
//         if(parseInt(index) === position) {
//             nums1[index] = 0;
//         } else {
//             nums1[index] += nums2[index]
//         }
//     }
//     let sum = nums1.reduce((pre,cur,index,array)=>pre+array[index],0)
//     // console.log('sum',sum, nums1, position)
//     return sum
// }
// var minimumTime = function(nums1, nums2, x) {
//     let res = 0;
//     let process_order = nums2.map((item,index) => {
//         return {
//             position: index,
//             value: item
//         }
//     })
//     .sort((a,b) => (a.value - b.value ))

//     for(let {position, value} of process_order) {
//         res++;
//         if(eachAdd(nums1, nums2, position) <= x) {
//             return res;
//         }
//     }
    
//     return -1;

// };



// 暴力回溯，效率问题


// const backTrack = (nums1, nums2, sortedIndices, hasViewed, times, cur_sum, nums2_sum, x) => {
//     if(cur_sum <= x) return times;
//     if(hasViewed.every(e => e)) return -1;
    
//     let mini_times = Infinity;
//     for (const position of sortedIndices) {
//         if(!hasViewed[position]) {
//             hasViewed[position] = true;
            
//             let temp_val = nums1[position];
//             nums1[position] = 0;
//             for (let i = 0; i < nums1.length; i++) {
//                 if (i !== position) {
//                     nums1[i] += nums2[i];
//                 }
//             }

//             cur_sum = nums1.sum();
//             let temp = backTrack(nums1, nums2, sortedIndices, hasViewed, times + 1, cur_sum, nums2_sum, x);
//             if(temp >= 0) {
//                 mini_times = Math.min(temp, mini_times);
//             }

//             // Restore the original state
//             nums1[position] = temp_val;
//             for (let i = 0; i < nums1.length; i++) {
//                 if (i !== position) {
//                     nums1[i] -= nums2[i];
//                 }
//             }

//             hasViewed[position] = false;
//         }
//     }
//     return isFinite(mini_times) ? mini_times : -1;
// }

// var minimumTime = function(nums1, nums2, x) {
//     const cur_sum = nums1.sum();
//     const hasViewed = new Array(nums1.length).fill(false);

//     // Sort indices based on the value of nums2
//     const sortedIndices = nums2
//         .map((_, index) => index)
//         .sort((a, b) => nums2[a] - nums2[b]);

//     return backTrack(nums1, nums2, sortedIndices, hasViewed, 0, cur_sum, nums2.sum(), x);
// }



// 动态规划
function minimumTime(nums1, nums2, x) {
    const n = nums1.length;
    let dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0; // 不需要操作就可以达到和为0

    // 计算前缀和
    let prefixSum1 = [0];
    for (let i = 0; i < n; i++) {
        prefixSum1.push(prefixSum1[i] + nums1[i]);
    }

    // 填充 DP 数组
    for (let i = 1; i <= n; i++) {
        // 不操作的情况
        if (prefixSum1[i] <= x) {
            dp[i] = 0;
        }

        // 遍历所有可能的操作，找出最小操作次数
        for (let j = 0; j < i; j++) {
            let sum = prefixSum1[i] - prefixSum1[j] + nums2.slice(j, i).sum(); // 计算操作后的和
            if (sum <= x) {
                dp[i] = Math.min(dp[i], i - j); // 更新最小操作次数
            }
        }
    }

    // 返回结果
    return dp[n] === Infinity ? -1 : dp[n-1];
}


// console.log(minimumTime([4,5,3,2,3,9,5,7,10,4],[4,4,0,4,1,2,4,0,4,0], 47))
// @lc code=end



/*
// @lcpr case=start
// [3,2,1]\n[1,2,1]\n4\n
// @lcpr case=end

// @lcpr case=start
// [3,2,1]\n[3,1,2]\n4\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n[3,3,3]\n4\n
// @lcpr case=end

 */

