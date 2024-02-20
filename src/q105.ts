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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if(preorder.length === 0) return null

    const root_val = preorder[0]
    const idx = inorder.indexOf(root_val)

    return new TreeNode(
        root_val,
        buildTree(preorder.slice(1, idx + 1), inorder.slice(0, idx)),
        buildTree(preorder.slice(idx + 1), inorder.slice(idx + 1))
    )
}