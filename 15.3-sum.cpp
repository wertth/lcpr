// @lcpr-before-debug-begin




// @lcpr-before-debug-end

/*
 * @lc app=leetcode.cn id=15 lang=cpp
 * @lcpr version=30119
 *
 * [15] 三数之和
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
    vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> ans;
        int len = nums.size();
        sort(nums.begin(), nums.end());

        int target = 0;

        for(int i = 0; i < len ; i++) {
            target = 0 - nums[i];

            if(i > 0 && nums[i]==nums[i-1])continue;

            // two num

            int left = i + 1, right = len - 1;

            while(left < right && left < len) {
                if(target < nums[left] + nums[right]) {
                    right--;
                } else if(target > nums[left] + nums[right]) {
                    left ++;
                } else {
                    ans.push_back({nums[i], nums[left] , nums[right]});
                    while(left  < right && nums[left] == nums[left + 1])left++;
                    while(right  > left && nums[right] == nums[right - 1])right--;
                    left++;
                    right--;
                }
            
            
            }


        }
        return ans;
    }
};
// @lc code=end



/*
// @lcpr case=start
// [-1,0,1,2,-1,-4]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0]\n
// @lcpr case=end

 */

