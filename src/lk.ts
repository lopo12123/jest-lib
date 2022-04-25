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

function lk(nums1: number[], nums2: number[]): number[] {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)

    const res: number[] = []
    let p1 = 0, p2 = 0
    while (p1 < nums1.length && p2 < nums2.length) {
        if(nums1[p1] === nums2[p2]) {
            res.push(nums1[p1])
            p1 ++
            p2 ++
        }
        else {
            nums1[p1] > nums2[p2] ? (p2 ++) : (p1 ++)
        }
    }
    return res
}


export {
    // lk
}
