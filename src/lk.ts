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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if(root === null) return null

    // 在左边
    if(root.val > key) {
        root.left = deleteNode(root.left, key)
        return root
    }

    // 在右边
    if(root.val < key) {
        root.right = deleteNode(root.right, key)
        return root
    }

    // 找到目标 (为了整齐写if)
    if(root.val === key) {
        // 叶子节点 - 直接删掉自己
        if(root.left === null && root.right === null) return null
        // 只有左子树
        if(root.right === null) return root.left
        // 只有右子树
        if(root.left === null) return root.right
        // 左右子树都有 - 把右子树的最小点拿来做根
        let min_in_right = root.right
        while (min_in_right.left) {
            min_in_right = min_in_right.left
        }
        root.right = deleteNode(root.right, min_in_right.val)
        min_in_right.left = root.left
        min_in_right.right = root.right
        return min_in_right
    }

    // 为了ts不报错写return
    return root
}

export {
    deleteNode
}
