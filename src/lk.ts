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
    #nums: number[]
    #hash = new Map<number, number>()

    constructor(nums: number[]) {
        this.#nums = nums
    }

    pick(target: number): number {
        let checkIndex = this.#hash.get(target) ?? 0

        while (1) {
            if(checkIndex === this.#nums.length) checkIndex = 0

            if(this.#nums[checkIndex] === target) {
                this.#hash.set(target, checkIndex + 1)
                return checkIndex
            }

            checkIndex++
        }

        return -1
    }
}

export {
    // lk
}

const sl = new Solution([ 1, 2, 1, 3, 3, 1 ])
console.log(sl.pick(1))
console.log(sl.pick(1))
console.log(sl.pick(1))
console.log(sl.pick(1))
