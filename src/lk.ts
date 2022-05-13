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

function lk(moves: number[][]): string {
    if(moves.length <= 4) return 'Pending'

    const table: number[][] = [ [], [], [] ]
    // 偶数A 奇数B
    const win = (y: number, x: number, me: number) => {
        let count = [ 0, 0, 0, 0 ]
        for (let i = -2; i <= 2; i++) {
            if(table[y + i]?.[x + i] === me) count[0] += 1
            if(table[y + i]?.[x - i] === me) count[1] += 1
            if(table[y + i]?.[x] === me) count[2] += 1
            if(table[y]?.[x + i] === me) count[3] += 1
        }
        return Math.max(...count) === 3
    }
    for (let i = 0; i < 4; i++) {
        table[moves[i][0]][moves[i][1]] = i % 2
    }

    for (let i = 4; i < moves.length; i++) {
        table[moves[i][0]][moves[i][1]] = i % 2
        if(win(moves[i][0], moves[i][1], i % 2)) return i % 2 === 0 ? 'A' : 'B'
    }

    return moves.length === 9 ? 'Draw' : 'Pending'
}

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
