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

function lk(intervals: number[][]): number[] {
    // [右界, 下标] 按右界小到大排序
    const right_border_with_idx = intervals
        .map((border, idx) => [ border[1], idx ])
        .sort((a, b) => a[0] - b[0])
    // 按左界小到大排序
    const left_border_with_idx = intervals
        .map((border, idx) => [ border[0], idx ])
        .sort((a, b) => a[0] - b[0])

    const len = right_border_with_idx.length
    const res: number[] = []
    let p = 0
    for (let i = 0; i < len; i++) {
        while (p < len) {
            if(left_border_with_idx[p][0] >= right_border_with_idx[i][0]) {
                res[right_border_with_idx[i][1]] = left_border_with_idx[p][1]
                break
            }
            else p += 1
        }
        if(p >= len) res[right_border_with_idx[i][1]] = -1
    }

    return res
}

console.log(lk([ [ 1, 2 ] ]))  // [-1]
console.log(lk([ [ 3, 4 ], [ 2, 3 ], [ 1, 2 ] ]))  // [-1,0,1]
console.log(lk([ [ 1, 4 ], [ 2, 3 ], [ 3, 4 ] ]))  // [-1,2,-1]

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
