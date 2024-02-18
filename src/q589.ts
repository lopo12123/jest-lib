class Node {
    val: number
    children: Node[]

    constructor(val?: number) {
        this.val = (val === undefined ? 0 : val)
        this.children = []
    }
}

function preorder(root: Node | null): number[] {
    const re: number[] = []

    const dfs = (node: Node | null) => {
        if(!node) return

        re.push(node.val)
        node.children.forEach(dfs)
    }
    dfs(root)

    return re
}
