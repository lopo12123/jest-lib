class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.left = (left === undefined ? null : left)
//         this.right = (right === undefined ? null : right)
//     }
// }


function lk(nums: number[]): number {
    let remain = nums.length * (nums.length + 1) / 2

    for(let i = 0; i < nums.length; i ++) {
        remain = remain - nums[i]
    }

    return remain
}

export {
    // lk
}

const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(2)
head.next.next.next = new ListNode(1)

console.log(lk(head))
