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

function amountOfTime(root: TreeNode | null, start: number): number {
    // 从爆发节点向三个方向扩散
    // - 左子树
    // - 右子树
    // - 向上
    // 所需的分钟数为三者的最大值

    // 爆发节点的左右子树的高度
    let sub = [ 0, 0 ]
    // 向上的最大跨度
    let max_pop = 0
    const dfs = (node: TreeNode | null): [ depth: number, to_target: number, find: boolean ] => {
        if(!node) return [ 0, 0, false ]

        const [ l, toL, inL ] = dfs(node.left)
        const [ r, toR, inR ] = dfs(node.right)

        if(node.val === start) {
            // 记录左右子树高度并截断
            sub = [ l, r ]
            return [ 1, 1, true ]
        } else {
            // 如果存在于子树中, 则向上传递的最远路线为 l+r
            if(inL) {
                max_pop = Math.max(max_pop, toL + r)
                // 此时 depth 不再使用
                return [ -1, toL + 1, true ]
            } else if(inR) {
                max_pop = Math.max(max_pop, l + toR)
                // 此时 depth 不再使用
                return [ -1, toR + 1, true ]
            }

            // 此时 to_target 暂无使用
            return [ Math.max(l, r) + 1, 0, false ]
        }
    }
    dfs(root)

    return Math.max(max_pop, sub[0], sub[1])
}

const tree = new TreeNode(
    1,
    new TreeNode(
        5,
        null,
        new TreeNode(
            4,
            new TreeNode(9),
            new TreeNode(2),
        ),
    ),
    new TreeNode(
        3,
        new TreeNode(10),
        new TreeNode(6),
    ),
)

const tree2 = new TreeNode(
    5,
    new TreeNode(4),
    new TreeNode(3),
)

const r = amountOfTime(tree2, 5)
console.log(r)