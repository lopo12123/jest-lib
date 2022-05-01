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

function lk(root1: TreeNode | null, root2: TreeNode | null): number[] {
    // 中序遍历 得到两个小到大的数组
    const num1: number[] = []
    const num2: number[] = []

    const dfs = (subRoot: TreeNode | null, can: number[]) => {
        if(subRoot === null) return
        else {
            dfs(subRoot.left, can)
            can.push(subRoot.val)
            dfs(subRoot.right, can)
        }
    }

    dfs(root1, num1)
    dfs(root2, num2)

    const res: number[] = []
    let p1 = 0, p2 = 0
    while (p1 < num1.length || p2 < num2.length) {
        if(p1 === num1.length) {
            res.push(...num2.slice(p2))
            break
        }
        else if(p2 === num2.length) {
            res.push(...num1.slice(p1))
            break
        }

        if(num1[p1] < num2[p2]) {
            res.push(num1[p1])
            p1 += 1
        }
        else {
            res.push(num2[p2])
            p2 += 1
        }
    }

    return res
}

export {
    lk
}

