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

function levelOrderBottom(root: TreeNode | null): number[][] {
    if(!root) return []

    const re: number[][] = []
    const stack: TreeNode[] = [ root ]
    while (stack.length > 0) {
        const level_size = stack.length
        const level: number[] = []
        for (let _ = 0; _ < level_size; _++) {
            const node = stack.shift()!;
            level.push(node.val)
            if(node.left) stack.push(node.left)
            if(node.right) stack.push(node.right)
        }
        re.push(level)
    }

    return re.reverse()
}