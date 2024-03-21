// @lcpr-before-debug-begin




// @lcpr-before-debug-end

/*
 * @lc app=leetcode.cn id=42 lang=cpp
 * @lcpr version=30119
 *
 * [42] 接雨水
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
    int trap(vector<int>& height) {
        return trapRecursive(0, height.size() - 1, height);
    }

    int trapRecursive(int left, int right, vector<int>& height) {
        if(left == right) return 0;

        int mid = 0;

        if(height[left] < height[right]) {
            mid = left;
            while(mid < right && height[mid] <= height[left]) {
                mid++;
            } 
        } else {
            mid = right;
            while(mid > left && height[mid] <= height[right]) {
                mid--;
            }
        }
        if(mid!=left && mid != right) {
            return trapRecursive(left, mid, height) +
                trapRecursive(mid, right, height);
        } else {
            int sum = 0;
            
            if(right - left - 1) {
                for_each(height.data() + left + 1, height.data() + right, [&](int val){
                    sum += val;
                });
                int x = (min(height[left], height[right]) * (right - left - 1) - sum);
                // cout << left << ' ' << right << ' ' <<x << ' ' << sum << endl;
                return x;
            } else return 0;

            
        }

    }
};
// @lc code=end



/*
// @lcpr case=start
// [0,1,0,2,1,0,1,3,2,1,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [4,2,0,3,2,5]\n
// @lcpr case=end

 */

