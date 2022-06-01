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

// class Node {
//     val: boolean
//     isLeaf: boolean
//     topLeft: Node | null
//     topRight: Node | null
//     bottomLeft: Node | null
//     bottomRight: Node | null
//
//     constructor(val?: boolean, isLeaf?: boolean, topLeft?: Node, topRight?: Node, bottomLeft?: Node, bottomRight?: Node) {
//         this.val = (val === undefined ? false : val)
//         this.isLeaf = (isLeaf === undefined ? false : isLeaf)
//         this.topLeft = (topLeft === undefined ? null : topLeft)
//         this.topRight = (topRight === undefined ? null : topRight)
//         this.bottomLeft = (bottomLeft === undefined ? null : bottomLeft)
//         this.bottomRight = (bottomRight === undefined ? null : bottomRight)
//     }
// }

// class Node {
//     val: number
//     children: Node[]
//
//     constructor(val?: number, children?: Node[]) {
//         this.val = (val === undefined ? 0 : val)
//         this.children = (children === undefined ? [] : children)
//     }
// }

// const root: TreeNode = {
//     val: 4,
//     left: {
//         val: 2,
//         left: {
//             val: 1,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 3,
//             left: null,
//             right: null
//         }
//     },
//     right: {
//         val: 6,
//         left: {
//             val: 5,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 7,
//             left: null,
//             right: null
//         }
//     }
// }

const showTime = (fn: () => void) => {
    console.time('fn')
    fn()
    console.timeEnd('fn')
}

function lk(nums: number[], target: number): number {
    const len = nums.length
    nums.sort((a, b) => a - b)

    let sum = 0
    let diff = Infinity

    const find_third = (l: number, r: number, sum2: number): [ diff: number, sum3: number ] => {
        if(sum2 + nums[l] >= target) return [ sum2 + nums[l] - target, sum2 + nums[l] ]
        else if(sum2 + nums[r] <= target) return [ target - sum2 - nums[r], sum2 + nums[r] ]

        let mid = Math.floor((l + r) / 2)

        while (l < r) {
            if(sum2 + nums[mid] === target) return [ 0, target ]

            if(sum2 + nums[mid] > target) {
                r = mid - 1
            }
            else {
                l = mid + 1
            }
            mid = Math.floor((l + r) / 2)
        }

        const diff_mid = Math.abs(sum2 + nums[mid] - target)
        const diff_mid_l = !nums[mid - 1] ? Infinity : Math.abs(sum2 + nums[mid - 1] - target)
        const diff_mid_r = !nums[mid + 1] ? Infinity : Math.abs(sum2 + nums[mid + 1] - target)

        const min_diff = Math.min(diff_mid, diff_mid_l, diff_mid_r)

        if(min_diff === diff_mid) return [ diff_mid_l, sum2 + nums[mid] ]
        else if(min_diff === diff_mid_l) return [ diff_mid_l, sum2 + nums[mid - 1] ]
        else return [ diff_mid_r, sum2 + nums[mid + 1] ]
        // if(min_diff === diff_mid_r) return [ diff_mid_l, sum2 + nums[mid + 1] ]
    }

    for (let i = 0; i < len - 2; i++) {
        for (let j = i + 1; j < len - 1; j++) {
            const [ curr_diff, curr_sum ] = find_third(j + 1, len - 1, nums[i] + nums[j])

            if(curr_diff === 0) return target
            else if(curr_diff < diff) {
                diff = curr_diff
                sum = curr_sum
            }
        }
    }

    return sum
}

console.log(lk([ 1, 2, 5, 10, 11 ], 12))  // 13

export {
    lk
}
