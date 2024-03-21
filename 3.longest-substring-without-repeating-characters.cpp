/*
 * @lc app=leetcode.cn id=3 lang=cpp
 * @lcpr version=30119
 *
 * [3] 无重复字符的最长子串
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
// class Solution {
// public:
//     int lengthOfLongestSubstring(string s) {
//         int start = 0;
//         int end = 0;
//         unordered_map<char, int> map;
//         int len = s.size();
//         int maxSubLen = 0;
//         while(start < len) {
//             int curSubLen = 0;
//             while(end < len) {
//                 if(!map.count(s[end])) {
//                     map[s[end]] = 1;
//                     curSubLen++;
//                     end++;
//                 } else {
//                     curSubLen--;
//                     map.erase(s[start]);
//                     start++;
//                 }
//                 maxSubLen = max(maxSubLen, curSubLen);
//             }
//             if(end == len && map.size() == end - start) break;
//         }
//     return maxSubLen;

//     }
// };

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_set<char> countSet;
        int maxSubStrLen = 0;
        int left = 0, right = 0;
        int sLen = s.size();
        while(right < sLen) {
            if(!countSet.count(s[right])) {
                countSet.emplace(s[right]);
                right++;
            } else {
                countSet.erase(s[left]);
                left++;
            };
            maxSubStrLen = max(maxSubStrLen, right - left);
        }
        return maxSubStrLen;
    }
};
// @lc code=end



/*
// @lcpr case=start
// "abcabcbb"\n
// @lcpr case=end

// @lcpr case=start
// "bbbbb"\n
// @lcpr case=end

// @lcpr case=start
// "pwwkew"\n
// @lcpr case=end

 */

