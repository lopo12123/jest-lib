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

function lk(n: number): number {
    const str = n.toString(2)

    const zeros = str.match(/(?<=1)[0]*(?=1)/g)

    if(zeros === null) return 0
    else {
        return Math.max(...zeros.map(x => x.length)) + 1
    }
}

export {
    // lk
}

console.log(lk(0b1011))
