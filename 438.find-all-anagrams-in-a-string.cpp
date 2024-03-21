// @lcpr-before-debug-begin




// @lcpr-before-debug-end

/*
 * @lc app=leetcode.cn id=438 lang=cpp
 * @lcpr version=30119
 *
 * [438] 找到字符串中所有字母异位词
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
//     vector<int> findAnagrams(string s, string p) {
//         if(s.size() < p.size()) return {};

//         vector<int> sCount(26), pCount(26), res;

//         for(int i = 0; i < p.size(); i++) {
//             sCount[s[i] - 'a']++;
//             pCount[p[i] - 'a']++;
//         }
//         if(sCount == pCount) res.push_back(0);

//         for(int i = 0; i < s.size() - p.size(); i++) {
//             --sCount[s[i] - 'a'];
//             ++sCount[s[i+p.size()] - 'a'];

//             if(pCount == sCount) {
//                 res.push_back(i + 1);
//             }
//         }
//         return res;

//     }


// };

class Solution {
public:
    vector<int> findAnagrams(string s, string p) {
        int sLen = s.size(), pLen = p.size();

        if(sLen < pLen) return {};

        vector<int> count(26), res;

        for(int i = 0 ; i < pLen; i++) {
            ++count[s[i] - 'a'];
            --count[p[i] - 'a'];
        }
        int diff = 0;
        // diff 即存在差异的 字符总数
        for_each(count.begin(), count.end(), [&](int num){
            if(num)diff ++;
        });

        if(diff == 0) res.push_back(0);

        for(int i = 0; i < sLen - pLen ; i++) {
            if(count[s[i] - 'a'] == 1) {
                --diff;
            } else if (count[s[i] - 'a'] == 0) {
                ++diff;
            } //存在不需要处理的情况，本就数量不同 {count[s[i] - 'a'] == 0}，对diff无影响
            --count[s[i] - 'a'];


            if(count[s[i + pLen]  - 'a'] == -1) {
                --diff;
            } else if(count[s[i + pLen]  - 'a'] == 0){
                ++diff;
            }

            ++count[s[i + pLen]  - 'a'];

            if(!diff) res.push_back(i+1);
        }
        return res;

    }


};


// @lc code=end



/*
// @lcpr case=start
// "cbaebabacd"\n"abc"\n
// @lcpr case=end

// @lcpr case=start
// "abab"\n"ab"\n
// @lcpr case=end

 */

