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

function lk(arr: number[]): number {
    let sum = 0;
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        const leftCount = i, rightCount = n - i - 1;
        const leftOdd = Math.floor((leftCount + 1) / 2);
        const rightOdd = Math.floor((rightCount + 1) / 2);
        const leftEven = Math.floor(leftCount / 2) + 1;
        const rightEven = Math.floor(rightCount / 2) + 1;
        sum += arr[i] * (leftOdd * rightOdd + leftEven * rightEven);
    }
    return sum
}

console.log(lk([ 1, 4, 2, 5, 3 ]))  // 58
console.log(lk([ 10, 11, 12 ]))  // 66
console.log(lk([ 1, 2 ]))  // 3

// [1, 2, 3, 4]
//  2  3  3  2
// 1 + 2 + 3 + 4
// 1+2+3 + 2+3+4

// [10, 11, 12]
//  2   2   2

// [1, 2, 3, 4, 5]
//  3  4  5  4  3
/**
 * 1 + 2 + 3 + 4 + 5
 * 1+2+3 + 2+3+4 + 3+4+5
 * 1+2+3+4+5
 */

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
