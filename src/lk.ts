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

function lk(score: number[]): string[] {
    const scoreWithIndex = score.map((score, index) => [score, index])
    scoreWithIndex.sort((a, b) => b[0] - a[0])

    const res: string[] = []
    res[scoreWithIndex[0][1]] = 'Gold Medal'
    if(score.length > 1) res[scoreWithIndex[1][1]] = 'Silver Medal'
    if(score.length > 2) res[scoreWithIndex[2][1]] = 'Bronze Medal'

    for(let i = 3; i < scoreWithIndex.length; i ++) {
        res[scoreWithIndex[i][1]] = (i + 1) + ''
    }

    return res
}

export {
    lk
}
