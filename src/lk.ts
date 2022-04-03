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

function lk(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if(list1 === null && list2 === null) return null
    else if(list2 === null) return list1
    else if(list1 === null) return list2
    else {
        const nextOne = (l1: ListNode | null, l2: ListNode | null): [number, (ListNode | null), (ListNode | null)] => {
            if(l1 && l2) {
                if(l1.val < l2.val) {
                    return [l1.val, l1.next, l2]
                }
                else {
                    return [l2.val, l1, l2.next]
                }
            }
            else if(l1) {
                return [l1.val, l1.next, null]
            }
            else if(l2) {
                return [l2.val, null, l2.next]
            }
            else {  // never
                return [0, null, null]
            }
        }
        let l1p = list1
        let l2p = list2

        let min: number
        [min, list1, list2] = nextOne(list1, list2)

        const merge = new ListNode(min, null)
        let p = merge

        while (list1 || list2) {
            [min, list1, list2] = nextOne(list1, list2)
            p.next = new ListNode(min)
            p = p.next
        }

        return merge
    }
}

export {
    lk
}

const l1 = null
const l2 = {
    val: 1,
    next: null
}
console.log(lk(l1, l2))



