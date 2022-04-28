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
    const res: number[] = [];

    let i = 0;
    while (i < nums.length) {
        if(nums[i] % 2 === 0) res.unshift(nums[i])
        else res.push(nums[i])
        i++
    }

    return res
}

export {
    lk
}

console.log(lk([3,1,2,4]))

// console.log(lk( [[1,2], [4,3]]))
// console.log(lk([ [ 1, 2, 2, 3, 5 ], [ 3, 2, 3, 4, 4 ], [ 2, 4, 5, 3, 1 ], [ 6, 7, 1, 4, 5 ], [ 5, 1, 1, 2, 4 ] ]))
// [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]