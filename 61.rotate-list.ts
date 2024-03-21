/*
 * @lc app=leetcode.cn id=61 lang=typescript
 * @lcpr version=30112
 *
 * [61] 旋转链表
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    
    if(!head || !head.next) return head;
    let pre = head, after = head, cur_diff = 0;
    let len = 0;
    while(after.next && cur_diff < k) {
        after = after.next;
        cur_diff++;
    }
    /**
     * two case: 
     * 1. k too big 
     * 2. k just right 
     */
    
    // 1
    if(cur_diff < k) {
       len = cur_diff + 1;
       k %= len;
         after = head;
         cur_diff = 0;
         while(after.next && cur_diff < k) {
            after = after.next;
            cur_diff++;
        }
    } 
    while(after.next) {
        after = after.next;
        pre = pre.next;
    }

    // rotate
    after.next = head;
    head = pre.next;
    pre.next = null;

    return head;

};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n6\n
// @lcpr case=end

// @lcpr case=start
// [0,1,2]\n4\n
// @lcpr case=end

 */

