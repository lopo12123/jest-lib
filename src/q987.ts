import { MinPriorityQueue } from '@datastructures-js/priority-queue'

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
    // 稀疏矩阵
    const matrix = []

    const dfs = (node: TreeNode | null, x: number, y: number) => {
        if(!node) return

        // 第一次遇到此列
        if(!matrix[x]) matrix[x] = []

        const prev = matrix[x][y]
        if(prev === undefined) {
            // 第一次遇到此格 -- 直接填充
            matrix[x][y] = node.val
        } else if(typeof prev === 'number') {
            const queue = new MinPriorityQueue()
            queue.enqueue(prev)
            queue.enqueue(node.val)
            matrix[x][y] = queue
        } else {
            prev.enqueue(node.val)
        }
        dfs(node.left, x - 1, y + 1)
        dfs(node.right, x + 1, y + 1)
    }

    // 由于节点最多为 1000, 此处偏移 500 避免插入到数组的负索引
    dfs(root, 500, 0)

    // 去除空隙
    const re: number[][] = []
    matrix.map(sparse_col => {
        if(sparse_col === undefined) return

        const col: number[] = []
        sparse_col.forEach(cell => {
            if(cell === undefined) return
            if(typeof cell === 'number') col.push(cell)
            else {
                while (!cell.isEmpty()) {
                    col.push(cell.dequeue().element)
                }
            }
        })
        re.push(col)
    })

    return re
}