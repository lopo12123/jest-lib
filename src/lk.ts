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

function lk(height: number[]): number {
    let max = 0
    let l = 0, r = height.length - 1

    while (l < r) {
        // 左侧低 - 计算后移动左挡板
        if(height[l] < height[r]) {
            max = Math.max(max, height[l] * (r - l))

            const ori_l = height[l]
            l += 1
            while (height[l] < ori_l && l < r) {
                l += 1
            }
        }
        // 右侧低 - 计算后移动右挡板
        else if(height[l] > height[r]) {
            max = Math.max(max, height[r] * (r - l))

            const ori_r = height[r]
            r -= 1
            while (height[r] < ori_r && l < r) {
                r -= 1
            }
        }
        // 优化 - 两侧相等 - 同时移动直到都大于原先高度
        else {
            const ori_both = height[r]
            max = Math.max(max, height[l] * (r - l))

            l += 1
            r -= 1
            while (height[l] <= ori_both && l < r) {
                l += 1
            }
            while (height[r] <= ori_both && l < r) {
                r -= 1
            }
        }
    }

    return max
}

console.log(lk([ 1, 8, 6, 2, 5, 4, 8, 3, 7 ]))  // 49
console.log(lk([ 1, 2, 4, 3 ]))  // 4

export {
    lk
}
