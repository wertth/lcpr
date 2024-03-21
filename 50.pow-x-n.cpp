/*
 * @lc app=leetcode.cn id=50 lang=cpp
 * @lcpr version=30112
 *
 * [50] Pow(x, n)
 */


// @lcpr-template-start
#include <cstdlib>
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
    double myPow(double x, int n) {
        if(abs(x) < 1e-32) return 0;
        if(abs(x - 1) < 1e-32) return 1;
        if(n == 0) return 1;

        if(n < 0) {
            // if(abs(n - INT_MIN) < 1e-32) {
            //     return 1 / (myPow(x, INT_MAX) * x);
            // }
            // x = 1 / x;
            // n = -n;
            return 1 / (myPow(x, -(n + 1)) * x);
        }

        double half = myPow(x, n / 2);
        if(n % 2 == 0) {
            return half * half;
        } else {
            return half * half * x;
        }
    }
};
// @lc code=end



/*
// @lcpr case=start
// 2.00000\n10\n
// @lcpr case=end

// @lcpr case=start
// 2.10000\n3\n
// @lcpr case=end

// @lcpr case=start
// 2.00000\n-2\n
// @lcpr case=end

 */

