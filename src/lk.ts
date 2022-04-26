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
    return (s.trim().match(/[ ]+/g)?.length ?? 0) + 1
}

console.log(lk('   '))
console.log(lk('   1'))
console.log(lk('   1   '))
console.log(lk('   1   2'))

export {
    // lk
}
