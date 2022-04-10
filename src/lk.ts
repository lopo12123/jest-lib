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

function lk(numRows: number): number[][] {
    if(numRows === 1) return [[1]]
    else if(numRows === 2) return [[1], [1, 1]]

    const res: number[][] = [[1], [1, 1]]

    for(let rowIndex = 2; rowIndex < numRows; rowIndex ++) {
        const thisRow = []
        for(let i = 0; i < rowIndex - 1; i ++) {
            thisRow[i] = res[rowIndex - 1][i] + res[rowIndex - 1][i + 1]
        }
        res.push([1, ...thisRow, 1])
    }

    return res
}

export {
    lk
}
