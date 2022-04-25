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

// function lk(s: string, t: string): boolean {
//     if(s === '') return true
//     else if(s.length > t.length) return false
//     else {
//         let p_s = 0
//         for (let i = 0; i < t.length; i++) {
//             // if(p_s === s.length - 1) return true
//             if(s[p_s] === t[i]) p_s++
//             console.log(t[i], p_s)
//         }
//         return p_s === s.length
//     }
//
// }

class Solution {
    #hash = new Map<number, number[]>()

    constructor(nums: number[]) {
        for (let i = 0; i < nums.length; i++) {
            const ori = this.#hash.get(nums[i])
            if(ori === undefined) {
                this.#hash.set(nums[i], [ i ])
            }
            else {
                this.#hash.set(nums[i], [...ori, i])
            }
        }
    }

    pick(target: number): number {
        const allIndex = this.#hash.get(target) as number[]

        return allIndex[~~(Math.random() * allIndex.length)]
    }
}

export {
    // lk
}
