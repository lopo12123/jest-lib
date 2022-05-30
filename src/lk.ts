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

function lk(x: number): number {
    // [-2147483648, 2147483647]
    if(x === 0 || x === -(2 ** 31)) return 0
    else if(x % 10 === x) return x

    const minus = x < 0 ? -1 : 1
    x = Math.abs(x)

    const bit10_len = Math.floor(Math.log10(x)) + 1
    const bit10 = new Array(bit10_len)
        .fill(0).map((zero, idx) => Math.floor(x / (10 ** idx)) % 10)

    if(bit10.length < 10) return minus * bit10.reduce((prev, curr, idx) => {
        return prev + curr * (10 ** (bit10_len - 1 - idx))
    }, 0)
    else {
        const max = [ 2, 1, 4, 7, 4, 8, 3, 6, 4, 7 ]
        for (let i = 0; i < bit10_len; i++) {
            if(bit10[i] > max[i]) return 0
            else if(bit10[i] < max[i]) break
        }
        return minus * bit10.reduce((prev, curr, idx) => {
            return prev + curr * (10 ** (bit10_len - 1 - idx))
        }, 0)
    }
}

console.log(lk(1))

// console.log(lk(12345))
// console.log(lk(12345678))
// console.log(lk(0))
// console.log(lk(-123))
// console.log(lk(2 ** 31 - 1))  // 0
// console.log(lk(-(2 ** 31)))  // 0

/**
 * uaieuoua
 *
 * uaieuo
 *  aieuo
 *  aieuou
 *  aieuoua
 *   ieuoua
 */

// console.log(lk('030'))

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
