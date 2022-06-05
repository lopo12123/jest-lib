class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

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

function lk(board: string[][]): boolean {
    const useMemo = {
        row: new Array(9).fill(0).map(() => new Array(9).fill(0)),
        col: new Array(9).fill(0).map(() => new Array(9).fill(0)),
        area: new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0))),
    }

    for (let r = 0; r < 9; r ++) {
        for (let c = 0; c < 9; c ++) {
            if(board[r][c] !== '.') {
                const ceil = parseInt(board[r][c])

                if(
                    useMemo.row[r][ceil] === 1
                    || useMemo.col[c][ceil] === 1
                    || useMemo.area[Math.floor(r / 3)][Math.floor(c / 3)][ceil] === 1
                ) return false

                useMemo.row[r][ceil] = 1
                useMemo.col[c][ceil] = 1
                useMemo.area[Math.floor(r / 3)][Math.floor(c / 3)][ceil] = 1
            }
        }
    }

    return true
}


export {
    lk
}
