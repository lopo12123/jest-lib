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

class Node {
    val: boolean
    isLeaf: boolean
    topLeft: Node | null
    topRight: Node | null
    bottomLeft: Node | null
    bottomRight: Node | null

    constructor(val?: boolean, isLeaf?: boolean, topLeft?: Node, topRight?: Node, bottomLeft?: Node, bottomRight?: Node) {
        this.val = (val === undefined ? false : val)
        this.isLeaf = (isLeaf === undefined ? false : isLeaf)
        this.topLeft = (topLeft === undefined ? null : topLeft)
        this.topRight = (topRight === undefined ? null : topRight)
        this.bottomLeft = (bottomLeft === undefined ? null : bottomLeft)
        this.bottomRight = (bottomRight === undefined ? null : bottomRight)
    }
}

function lk(grid: number[][]): Node | null {
    if(grid.length === 0) return null
    else if(grid.length === 1) return new Node(Boolean(grid[0][0]), true)

    const checkIfSame = ([ xStart, xEnd ]: [ number, number ], [ yStart, yEnd ]: [ number, number ]): number => {
        // 只有一个格子则必定相同
        if(xStart === xEnd - 1 && yStart === yEnd - 1) return grid[yStart][xStart]
        else {
            const base = grid[yStart][xStart]
            for (let y = yStart; y < yEnd; y++) {
                for (let x = xStart; x < xEnd; x++) {
                    if(grid[y][x] !== base) return -1
                }
            }
            return base
        }
    }

    const div4 = (root: Node, xRange: [ number, number ], yRange: [ number, number ]) => {
        const check = checkIfSame(xRange, yRange)
        if(check !== -1) {
            root.val = Boolean(check)
            root.isLeaf = true
        }
        else {
            root.topLeft = new Node()
            div4(root.topLeft, [ xRange[0], (xRange[0] + xRange[1]) / 2 ], [ yRange[0], (yRange[0] + yRange[1]) / 2 ])
            root.topRight = new Node()
            div4(root.topRight, [ (xRange[0] + xRange[1]) / 2, xRange[1] ], [ yRange[0], (yRange[0] + yRange[1]) / 2 ])
            root.bottomLeft = new Node()
            div4(root.bottomLeft, [ xRange[0], (xRange[0] + xRange[1]) / 2 ], [ (yRange[0] + yRange[1]) / 2, yRange[1] ])
            root.bottomRight = new Node()
            div4(root.bottomRight, [ (xRange[0] + xRange[1]) / 2, xRange[1] ], [ (yRange[0] + yRange[1]) / 2, yRange[1] ])
        }
    }
    const res = new Node()
    div4(res, [ 0, grid.length ], [ 0, grid.length ])
    return res
}

export {
    lk
}

console.log(lk([ [ 0, 1 ], [ 1, 0 ] ]))