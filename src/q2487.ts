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

function removeNodes(head: ListNode | null): ListNode | null {
    if(!head) return null

    // (val, index)[]
    const v_i: [ number, number ][] = []

    let ptr: ListNode | null = head
    while (!!ptr) {
        v_i.push([ ptr.val, v_i.length ])
        ptr = ptr.next
    }

    const _final_max = v_i.reduceRight((max, curr, idx, arr) => {
        if(curr[0] < max) {
            // mark filtered item
            arr[idx][1] = -1
            return max
        } else {
            // do nothing on kept item, update max
            return curr[0]
        }
    }, -Infinity)

    let new_head: ListNode | null = null
    let new_tail: ListNode | null = null
    let ptr2: ListNode | null = head
    let i = 0
    while (!!ptr2) {
        // chain the kept items
        if(v_i[i][1] != -1) {
            // new head
            if(!new_head) {
                new_head = ptr2
                new_tail = ptr2
            }
            // new chain
            else {
                new_tail!.next = ptr2
                new_tail = ptr2
            }
        }

        i += 1
        ptr2 = ptr2.next
    }

    return new_head
}

function removeNodes_proto(head: ListNode | null): ListNode | null {
    if(!head) return null

    // 1. bind 'prev' property on prototype
    let ptr = head
    while (ptr.next) {
        // @ts-ignore
        ptr.next.prev = ptr
        ptr = ptr.next
    }

    // 2. re-chain
    // @ts-ignore
    let prev: ListNode | null = ptr.prev
    // @ts-ignore
    while (!!prev) {
        // valid prev, keep it
        if(prev.val >= ptr.val) {
            // re-chain
            prev.next = ptr
            // update ptr to prev
            ptr = prev
        }

        // @ts-ignore
        // move forward
        prev = prev.prev
    }

    // 3. OPTIONLAL: delete the 'prev' property on all nodes

    return ptr
}

const head = new ListNode(5, new ListNode(2, new ListNode(13, new ListNode(3, new ListNode(8)))))
console.log(removeNodes(head))
