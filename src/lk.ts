// class ListNode {
//     val: number
//     next: ListNode | null
//
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//     }
// }

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

// class Node {
//     val: boolean
//     isLeaf: boolean
//     topLeft: Node | null
//     topRight: Node | null
//     bottomLeft: Node | null
//     bottomRight: Node | null
//
//     constructor(val?: boolean, isLeaf?: boolean, topLeft?: Node, topRight?: Node, bottomLeft?: Node, bottomRight?: Node) {
//         this.val = (val === undefined ? false : val)
//         this.isLeaf = (isLeaf === undefined ? false : isLeaf)
//         this.topLeft = (topLeft === undefined ? null : topLeft)
//         this.topRight = (topRight === undefined ? null : topRight)
//         this.bottomLeft = (bottomLeft === undefined ? null : bottomLeft)
//         this.bottomRight = (bottomRight === undefined ? null : bottomRight)
//     }
// }

// class Node {
//     val: number
//     children: Node[]
//
//     constructor(val?: number, children?: Node[]) {
//         this.val = (val === undefined ? 0 : val)
//         this.children = (children === undefined ? [] : children)
//     }
// }

class Node {
    val: number
    next: Node | null

    constructor(val?: number, next?: Node) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

// const root: TreeNode = {
//     val: 4,
//     left: {
//         val: 2,
//         left: {
//             val: 1,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 3,
//             left: null,
//             right: null
//         }
//     },
//     right: {
//         val: 6,
//         left: {
//             val: 5,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 7,
//             left: null,
//             right: null
//         }
//     }
// }

function lk(root: TreeNode): number[] {
    const count = new Map<number, number>()

    const dfs = (sub: TreeNode | null): number => {
        if(sub === null) return 0
        else {
            const sum = sub.val + dfs(sub.left) + dfs(sub.right)
            count.set(sum, (count.get(sum) ?? 0) + 1)
            return sum
        }
    }

    dfs(root)

    const sorted = [ ...count ].sort((a, b) => b[1] - a[1])
    for (let i = 1; i < sorted.length; i++) {
        if(sorted[i][1] !== sorted[i - 1][1]) return sorted.slice(0, i).map(x => x[0])
    }
    return sorted.map(x => x[0])
}

// console.log(lk([
//     [ 1, 2 ],
//     [ 3, 5 ],
//     [ 4, 6 ],
//     [ 7, 8 ],
// ]))
console.log(lk([ 1, 1, 2, 2, 2, 3 ], 0))

export {
    lk
}
