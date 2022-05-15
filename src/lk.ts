// class ListNode {
//     val: number
//     next: ListNode | null
//
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//     }
// }

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

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
//     val: 1,
//     left: {
//         val: 2,
//         left: {
//             val: 3,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 4,
//             left: null,
//             right: null
//         }
//     },
//     right: {
//         val: 5,
//         left: {
//             val: 6,
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

function lk(n: number, k: number): number {
    const selects = (m: number) => {
        if(m === 0) return 1

        let all = 1
        for (let i = n; i > m; i--) {
            all *= i
        }
        for (let j = (n - m); j > 1; j--) {
            all /= j
        }
        return all
    }
    if(k === 0 || k === n * n) return 1
    else {
        let count = 0
        for (let x = 0; x < n; x++) {
            for (let y = 0; y < n; y++) {
                if((n * x + n * y - x * y) === k) {
                    if(x === n) count += selects(y)
                    else if(y === n) count += selects(x)
                    else count += selects(x) * selects(y)
                }
            }
        }
        return count
    }
}

console.log(lk(2, 4))


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
