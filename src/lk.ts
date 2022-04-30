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

function lk(grid: number[][]): number {
    const [xL, yL] = [grid[0].length, grid.length]

    const border = (x: number, y: number) => {
        let ceilBorder = 0
        if(x === 0 || grid[y][x - 1] === 0) ceilBorder += 1
        if(y === 0 || grid[y - 1][x] === 0) ceilBorder += 1
        if(x === xL - 1 || grid[y][x + 1] === 0) ceilBorder += 1
        if(y === yL - 1 || grid[y + 1][x] === 0) ceilBorder += 1
        return ceilBorder
    }

    let sum = 0
    for(let y = 0; y < grid.length; y ++) {
        for(let x = 0; x < grid[0].length; x ++) {
            sum += grid[y][x] === 1 ? border(x, y) : 0
        }
    }
    return sum
}

export {
    lk
}

