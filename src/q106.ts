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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if(postorder.length === 0) return null

    const root_val = postorder.at(-1)
    const idx = inorder.indexOf(root_val)

    return new TreeNode(
        root_val,
        buildTree(inorder.slice(0, idx), postorder.slice(0, idx)),
        buildTree(inorder.slice(idx + 1), postorder.slice(idx, -1))
    )
}
