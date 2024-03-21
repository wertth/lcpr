/*
 * @lc app=leetcode.cn id=128 lang=cpp
 * @lcpr version=30119
 *
 * [128] 最长连续序列
 */


// @lcpr-template-start
using namespace std;
#include <algorithm>
#include <array>
#include <bitset>
#include <climits>
#include <deque>
#include <functional>
#include <iostream>
#include <list>
#include <queue>
#include <stack>
#include <tuple>
#include <unordered_map>
#include <unordered_set>
#include <utility>
#include <vector>
// @lcpr-template-end
// @lc code=start
class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_set<int> nums_set;
        for(const int& num: nums) {
            nums_set.insert(num);
        }

        unordered_map<int, int> nums_map;
        int longestStreak = 0, current_streak = 0;
        for(const int num: nums_set) {
            int current_start = num;
            if(nums_set.find(num - 1) != nums_set.end()) { //
                continue;
            } else {
                current_streak = 1;
                while(nums_set.count(num+1)) {
                    current_streak++;
                }
            }
            longestStreak = max(longestStreak, current_streak);
        }

        return longestStreak;

    }
};
// @lc code=end



/*
// @lcpr case=start
// [100,4,200,1,3,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,3,7,2,5,8,4,6,0,1]\n
// @lcpr case=end

 */

