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

function lk(root: TreeNode | null): number {
    if(root === null) return 0

    let maxL = 0

    const dfs_branch = (subRoot: TreeNode | null): [ left: number, right: number ] => {
        if(subRoot === null) return [ 0, 0 ]
        else {
            let left, right
            if(subRoot.left === null) left = 0
            else {
                left = Math.max(...dfs_branch(subRoot.left)) + 1
            }
            if(subRoot.right === null) right = 0
            else {
                right = Math.max(...dfs_branch(subRoot.right)) + 1
            }

            // 比较
            maxL = Math.max(maxL, left + right)

            return [left, right]
        }
    }

    const [l, r] = dfs_branch(root)
    maxL = Math.max(maxL, l + r)

    return maxL
}

export {
    lk
}
