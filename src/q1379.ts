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

function getTargetCopy(original: TreeNode | null, cloned: TreeNode | null, target: TreeNode | null): TreeNode | null {
    /**
     * - true: left
     * - false: right
     */
    let path: boolean[]
    const dfs = (node: TreeNode | null, pathNow: boolean[]) => {
        if(!node) return
        if(node === target) {
            path = pathNow
            return
        }

        dfs(node.left, [ ...pathNow, true ])
        dfs(node.right, [ ...pathNow, false ])
    }
    dfs(original, [])

    let ref = cloned
    for (const side of path!) {
        ref = side ? ref!.left : ref!.right
    }
    return ref
}