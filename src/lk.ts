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

function lk(accounts: number[][]): number {
    let max = 0
    for(let person = 0; person < accounts.length; person ++) {
        let sum = 0
        for(let bank = 0; bank < accounts[0].length; bank ++) {
            sum += accounts[person][bank]
        }
        max = Math.max(sum, max)
    }
    return max
}



export {
    lk
}


