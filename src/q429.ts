class Node {
    val: number
    children: Node[]

    constructor(val?: number) {
        this.val = (val === undefined ? 0 : val)
        this.children = []
    }
}

function levelOrder(root: Node | null): number[][] {
    if(!root) return []

    const re: number[][] = []

    const stack: Node[] = [ root ]

    while (stack.length > 0) {
        const len = stack.length
        const row: number[] = []
        for (let _ = 0; _ < len; _++) {
            const node = stack.shift()!
            row.push(node.val)
            node.children.forEach(sub => stack.push(sub))
        }
        re.push(row)
    }

    return re
}