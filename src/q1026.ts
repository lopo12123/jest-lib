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

function maxAncestorDiff(root: TreeNode | null): number {
    let re = 0;

    const dfs = (node: TreeNode | null): [ min?: number, max?: number ] => {
        if(!node) return [ undefined, undefined ]

        const [ min_l = node.val, max_l = node.val ] = dfs(node?.left)
        const [ min_r = node.val, max_r = node.val ] = dfs(node?.right)

        re = Math.max(
            re,
            Math.abs(node.val - min_l),
            Math.abs(node.val - max_l),
            Math.abs(node.val - min_r),
            Math.abs(node.val - max_r),
        )

        return [ Math.min(min_l, min_r, node.val), Math.max(max_l, max_r, node.val) ]
    }
    dfs(root)

    return re
}