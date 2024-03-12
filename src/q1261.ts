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

class FindElements {
    #values: Set<number> = new Set()

    build(node: TreeNode | null, tobe: number) {
        if(!node) return
        node.val = tobe
        this.#values.add(tobe)
        this.build(node.left, tobe * 2 + 1)
        this.build(node.right, tobe * 2 + 2)
    }

    constructor(root: TreeNode | null) {
        this.build(root, 0)
    }

    find(target: number): boolean {
        return this.#values.has(target)
    }
}

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
