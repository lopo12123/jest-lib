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

function lk(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    if(root1 === null && root2 === null) return null

    let newRoot = new TreeNode()

    const dfs_2 = (sub1: TreeNode | null | undefined, sub2: TreeNode | null| undefined, target: TreeNode) => {
        if(!sub1 && !sub2) return
        else {
            target.val = (sub1?.val ?? 0) + (sub2?.val ?? 0)
            if(sub1?.left || sub2?.left) {
                target.left = new TreeNode()
                dfs_2(sub1?.left, sub2?.left, target.left)
            }
            if(sub1?.right || sub2?.right) {
                target.right = new TreeNode()
                dfs_2(sub1?.right, sub2?.right, target.right)
            }
        }
    }

    dfs_2(root1, root2, newRoot)

    return newRoot
}

export {
    lk
}
