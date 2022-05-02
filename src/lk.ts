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

function lk(mat: number[][], r: number, c: number): number[][] {
    if(r * c !== mat.length * mat[0].length) return mat
    else {
        const x_len = mat[0].length
        const y_len = mat.length
        const res: number[][] = new Array(r).fill(1).map(() => [])

        for (let y = 0; y < y_len; y++) {
            for (let x = 0; x < x_len; x++) {
                const num = y * x_len + x + 1  // 第几个

                res[Math.floor((num - 1) / c)][(num + c - 1) % c] = mat[y][x]
            }
        }

        return res
    }
}

console.log(lk([[1,2], [3,4]], 4, 1))

export {
    lk
}
