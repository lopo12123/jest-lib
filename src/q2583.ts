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

function kthLargestLevelSum(root: TreeNode | null, k: number): number {
    const sum: number[] = []

    const dfs = (node: TreeNode | null, level: number) => {
        if(!node) return

        sum[level] = (sum[level] ?? 0) + node.val
        dfs(node.left, level + 1)
        dfs(node.right, level + 1)
    }

    dfs(root, 0)

    sum.sort((a, b) => b - a)

    return sum[k - 1] ?? -1
}
