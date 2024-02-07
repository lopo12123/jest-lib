/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
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

function replaceValueInTree(root: TreeNode | null): TreeNode | null {
    // index 表示深度
    const sum: number[] = []

    // 遍历获取每一层的和
    const dfs_scan = (node: TreeNode | null, depth: number): void => {
        if(!node) return
        sum[depth] ??= 0
        sum[depth] += node.val;
        dfs_scan(node.left, depth + 1)
        dfs_scan(node.right, depth + 1)
    }
    dfs_scan(root, 0)

    // 遍历修改每一个节点的值
    const dfs_modify = (node: TreeNode | null, depth: number, neighbor: number) => {
        if(!node) return
        node.val = sum[depth] - node.val - neighbor
        const vl = node.left?.val ?? 0
        const vr = node.right?.val ?? 0
        dfs_modify(node.left, depth + 1, vr)
        dfs_modify(node.right, depth + 1, vl)
    }
    dfs_modify(root, 0, 0)

    return root
}

const root = new TreeNode(
    5,
    new TreeNode(
        4,
        new TreeNode(1),
        new TreeNode(10),
    ),
    new TreeNode(
        9,
        null,
        new TreeNode(7),
    ),
)

const modified = replaceValueInTree(root)
console.log(modified)
