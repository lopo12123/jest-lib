// class ListNode {
//     val: number
//     next: ListNode | null
//
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//     }
// }

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

function lk(s: string): number {
    if(s.trim() === '') return 0

    let sum = s[0] === ' ' ? 0 : 1
    for(let i = 1; i < s.length; i ++) {
        if(s[i - 1] === ' ' && s[i] !== ' ') sum ++
    }
    return sum
}


export {
    // lk
}
