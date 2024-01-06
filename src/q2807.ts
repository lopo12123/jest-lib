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

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
    const gcd = (a: number, b: number): number => {
        if(b === 0) return a
        return gcd(b, a % b)
    }

    let prev = head
    let curr = head!.next

    while (!!curr) {
        const v = gcd(prev!.val, curr.val)
        prev!.next = new ListNode(v, curr)
        prev = curr
        curr = curr.next
    }

    return head
}