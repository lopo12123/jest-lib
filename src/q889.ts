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

function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode | null {
    if(preorder.length === 0) return null

    // 前序第一个 和 后序最后一个 是根节点
    const root_val = preorder[0]

    // 前序第二个 是左子树的根节点
    const sub_root_val = preorder[1]

    // 在后序中找到左子树的根节点: 其左边是左子树的节点 (包括自身); 右边是右子树的节点
    const sub_root_index = postorder.indexOf(sub_root_val)

    return new TreeNode(
        root_val,
        constructFromPrePost(preorder.slice(1, sub_root_index + 2), postorder.slice(0, sub_root_index + 1)),
        constructFromPrePost(preorder.slice(sub_root_index + 2), postorder.slice(sub_root_index + 1, -1))
    )
}
