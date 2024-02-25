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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if(!root) return null

    const val = root.val
    const v1 = p!.val
    const v2 = q!.val
    if((val - v1) * (val - v2) <= 0) return root
    return lowestCommonAncestor(val > v1 ? root.left : root.right, p, q)
}