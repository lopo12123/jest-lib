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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if(!root) return []

    const re: number[][] = []
    const stack: TreeNode[] = [ root ]
    let reverse = false

    while (stack.length > 0) {
        const len = stack.length

        const row_val: number[] = []
        for (let _ = 0; _ < len; _++) {
            const node = stack.shift()!
            row_val.push(node.val)
            if(!!node.left) stack.push(node.left)
            if(!!node.right) stack.push(node.right)
        }

        re.push(reverse ? row_val.reverse() : row_val)
        reverse = !reverse
    }

    return re
}