/*
 * @lc app=leetcode.cn id=83 lang=typescript
 * @lcpr version=30113
 *
 * [83] 删除排序链表中的重复元素
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for singly-linked list.

 */

// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(!head) return head;
    let pre = head, after = head;
    while(after) {
        if(after.val !== pre.val) {
            pre = pre.next
            pre.val = after.val
        }
        after = after.next;
    }
    pre.next = null
    console.log(head)
    return head;
};
// @lc code=end



/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,2,3,3]\n
// @lcpr case=end

 */

