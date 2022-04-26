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

function lk(nums: number[]): number[] {
    const ordered: any[] = new Array(nums.length).fill(undefined)

    nums.forEach((item) => {
        ordered[item - 1] = true
    })

    const res: number[] = []

    ordered.forEach((item, index) => {
        if(!item) res.push(index + 1)
    })

    return res
}

console.log(lk([1, 1]))

export {
    // lk
}
