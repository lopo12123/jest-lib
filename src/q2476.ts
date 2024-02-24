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

function closestNodes(root: TreeNode | null, queries: number[]): number[][] {
    if(!root) return []

    // flatten the tree
    const sorted: number[] = []
    const sort = (node: TreeNode | null) => {
        if(!node) return
        sort(node.left)
        sorted.push(node.val)
        sort(node.right)
    }
    sort(root)

    // binary search for each query
    const bs = (candidate: number, stops: number[]): [ number, number ] => {
        // find the first number that is greater than or equal to the query, return the 'index' of that number

        let low = 0
        let high = stops.length - 1
        // greater or equal
        let gt_eq = stops.length

        while (low <= high) {
            const mid = (low + high) / 2 >> 0
            if(stops[mid] >= candidate) {
                high = mid - 1
                gt_eq = mid
            } else {
                low = mid + 1
            }
        }

        const right = stops[gt_eq] ?? -1
        if(candidate === right) return [ right, right ]
        else return [ stops[gt_eq - 1] ?? -1, right ]
    }

    return queries.map(q => bs(q, sorted))
}