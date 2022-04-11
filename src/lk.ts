class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

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

function lk(root: TreeNode | null): number[] {
    if(!root) return []

    const all: number[] = []
    const dfs = (subRoot: TreeNode | null) => {
        if(subRoot === null) return
        all.push(subRoot.val)
        dfs(subRoot.left)
        dfs(subRoot.right)
    }
    dfs(root)

    return all
}

export {
    lk
}

console.log(JSON.stringify(new TreeNode(1, new TreeNode(2), new TreeNode(3))))
