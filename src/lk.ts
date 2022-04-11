class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function lk(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let target: ListNode | null = null

    let p = headA
    // visit
    while (p !== null) {
        // @ts-ignore
        p.visited = true
        p = p.next
    }

    // search
    p = headB
    while (p !== null) {
        // @ts-ignore
        if(p.visited) {
            // @ts-ignore
            delete p.visited
            target = p
            break
        }
        p = p.next
    }

    // recover
    p = headA
    while (p !== null) {
        // @ts-ignore
        delete p.visited
        p = p.next
    }

    return target
}

export {
    lk
}

