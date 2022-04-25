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
    const count = new Map<number, number>()

    for (let i = 0; i < nums1.length; i ++) {
        const item = count.get(nums1[i])
        if(!!item) {
            count.set(nums1[i], item + 1)
        }
        else {
            count.set(nums1[i], 1)
        }
    }

    const res: number[] = []

    for (let j = 0; j < nums2.length; j ++) {
        const itemIn1 = count.get(nums2[j])

        if(itemIn1 && itemIn1 > 0) {
            res.push(nums2[j])
            count.set(nums2[j], itemIn1 - 1)
        }
    }

    return res
}


export {
    // lk
}
