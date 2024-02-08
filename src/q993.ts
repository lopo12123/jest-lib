/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
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

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
    // 第一个找到的数字的level
    let lv1: number | null = null
    let re = false

    const dfs = (node: TreeNode, neighbor: number | undefined, level: number) => {
        if(node === null) return

        if(node.val === x || node.val === y) {
            // 兄弟节点 -- 直接返回
            if(neighbor === x || neighbor === y) {
                re = false
                return;
            }

            if(lv1 === null) {
                /// 找到第一个 -- 记录level
                lv1 = level
            } else {
                // 找到另一个 -- 判断是否在同一层
                re = lv1 === level
                return
            }
        }

        dfs(node.left!, node.right?.val, level + 1)
        dfs(node.right!, node.left?.val, level + 1)
    }
    dfs(root!, 0, 0)

    return re
}