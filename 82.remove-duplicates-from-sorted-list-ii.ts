/*
 * @lc app=leetcode.cn id=82 lang=typescript
 * @lcpr version=30113
 *
 * [82] 删除排序链表中的重复元素 II
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return head
    let ext_head = new ListNode(0, head),pre = ext_head,cur = head, temp = head;

    while(cur.next) {
        if(cur.next.val === cur.val) {
            if(pre.next === cur) {
                console.log('pin', cur)
                temp = cur
            }
            cur = cur.next
        } else {
            if(cur.next.val !== temp.val && temp !== cur) {
                console.log('concat', cur.next)
                pre.next = cur.next
            } else {
                pre = cur 
            }
            cur = cur.next
            temp = cur
        }
    }
    if(temp != cur) {
        console.log('concat', temp, cur)
        pre.next = cur.next
    }
    return ext_head.next
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,3,4,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,1,1,1]\n
// @lcpr case=end




 */

