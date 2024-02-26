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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    let sum = 0
    const dfs = (node: TreeNode | null) => {
        if(!node) return null

        const v = node.val
        if(v >= low && v <= high) {
            sum += v
        }
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return sum
}
