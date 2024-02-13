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

function verticalTraversal(root: TreeNode | null): number[][] {
    const nodes: [ x: number, y: number, v: number ][] = []

    const dfs = (node: TreeNode | null, x: number, y: number) => {
        if(!node) return

        nodes.push([ x, y, node.val ])
        dfs(node.left, x - 1, y + 1)
        dfs(node.right, x + 1, y + 1)
    }
    dfs(root, 0, 0)

    // 按照 x-y-v 优先级排序
    nodes.sort(([ x1, y1, v1 ], [ x2, y2, v2 ]) => {
        if(x1 !== x2) return x1 - x2
        else if(y1 != y2) return y1 - y2
        else return v1 - v2
    })

    const re: number[][] = []
    let prev_x: number = nodes[0][0]
    let temp_arr: number[] = []
    for (const [ x, _, v ] of nodes) {
        if(x !== prev_x) {
            re.push(temp_arr)
            temp_arr = []
            prev_x = x
        }
        temp_arr.push(v)
    }
    re.push(temp_arr)

    return re
}