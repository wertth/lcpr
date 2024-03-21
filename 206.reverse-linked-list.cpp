// @lcpr-before-debug-begin




// @lcpr-before-debug-end

/*
 * @lc app=leetcode.cn id=206 lang=cpp
 * @lcpr version=30112
 *
 * [206] 反转链表
 */


// @lcpr-template-start
#include <cstddef>
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
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
struct ListNode;
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        if(nullptr == head) return head;

        ListNode* _pre{nullptr}, *_cur = head, *_next = head->next;


        while(nullptr != _cur) {
            _cur->next = _pre;

            _pre = _cur;
            _cur = _next;
            _next = _next ? _next->next : nullptr;


        }

        return _pre;

    }
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

