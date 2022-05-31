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

function lk(nums: number[]): number {
    let max = 0
    let l = 0, r = nums.length - 1

    while (l < r) {
        // 左侧低 - 计算后移动左挡板
        if(nums[l] < nums[r]) {
            max = Math.max(max, nums[l] * (r - l))

            while (nums[l] < nums[r] && l < r) {
                l += 1
            }
        }
        // 右侧低 - 计算后移动右挡板
        else if(nums[l] > nums[r]) {
            max = Math.max(max, nums[r] * (r - l))

            while (nums[l] > nums[r] && l < r) {
                r -= 1
            }
        }
        // 优化 - 两侧相等 - 同时移动直到都大于原先高度
        else {
            const ori_h = nums[r]
            max = Math.max(max, nums[l] * (r - l))

            while (nums[l] <= ori_h && l < r) {
                l += 1
            }
            while (nums[r] <= ori_h && l < r) {
                r -= 1
            }
        }
    }

    return max
}

console.log(lk([ 1, 8, 6, 2, 5, 4, 8, 3, 7 ]))  // 49

// const showTime = (fn: () => void) => {
//     console.time('fn')
//     fn()
//     console.timeEnd('fn')
// }
// showTime(() => {
//     console.log(lk('pale', 'ple'))
// })

export {
    lk
}
