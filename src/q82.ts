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
class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
    const fixed = new ListNode(-101, head)

    let ptr: ListNode | null = fixed

    while (!!ptr?.next && !!ptr.next.next) {
        if(ptr.next.val === ptr.next.next.val) {
            let next_node: ListNode | null = ptr.next.next
            const v: number = ptr.next.val
            while (next_node?.val === v) {
                next_node = next_node.next
            }
            ptr.next = next_node
            // 这里不能直接 ptr = ptr.next, 可能会 1-2-2-3-3 ('2'删除了但是'3'未判断)
        } else {
            ptr = ptr.next
        }
    }

    return fixed.next
}

const buildChain = (items: number[]): ListNode => {
    const head = new ListNode(items[0])
    let ptr = head

    for (let i = 1; i < items.length; i++) {
        ptr.next = new ListNode(items[i])
        ptr = ptr.next
    }

    return head
}
console.log(JSON.stringify(deleteDuplicates(buildChain([ 1, 2, 3, 3, 4, 4, 5 ]))))
