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

function lk(grid: number[][]): number {
    const ylen = grid.length, xlen = grid[0].length

    if(ylen === 1 && xlen === 1) return grid[0][0] === 0 ? 0 : (grid[0][0] * 4 + 2)

    let sum = 0

    const all_around = (x: number, y: number, h: number) => {
        return (x === 0 ? h : Math.max(0, h - grid[y][x - 1]))  // 左
            + (x === (xlen - 1) ? h : Math.max(0, h - grid[y][x + 1]))  // 右
            + (y === 0 ? h : Math.max(0, h - grid[y - 1][x]))  // 上
            + (y === (ylen - 1) ? h : Math.max(0, h - grid[y + 1][x]))  // 下
            + (h === 0 ? 0 : 2)
    }

    for (let y = 0; y < ylen; y++) {
        for (let x = 0; x < xlen; x++) {
            sum += all_around(x, y, grid[y][x])
        }
    }

    return sum
}

export {
    lk
}
