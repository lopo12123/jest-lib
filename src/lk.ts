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

const showTime = (fn: () => void) => {
    console.time('fn')
    fn()
    console.timeEnd('fn')
}

function lk(rows: number, cols: number, rCenter: number, cCenter: number): number[][] {
    const res: [ number, number ][][] = []

    let dis = 0
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            dis = Math.abs(r - rCenter) + Math.abs(c - cCenter)
            if(!res[dis]) res[dis] = [ [ r, c ] ]
            else res[dis].push([ r, c ])
        }
    }

    return res.flat()
}

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


function serialize(root: TreeNode | null): string {
    if(root === null) return ''

    let s = ''

    const dfs = (sub: TreeNode | null) => {
        if(sub === null) s += ','
        else {
            s += sub.val + ','
            dfs(sub.left)
            dfs(sub.right)
        }
    }
    dfs(root)

    return s
}

function deserialize(data: string): TreeNode | null {
    if(data === '') return null

    const vals = data.split(',')

    const root = new TreeNode(parseInt(vals[0]))
    let p = 1

    const dfs = (parent: TreeNode | null) => {
        if(p >= vals.length || parent === null) return

        parent.left = vals[p] === '' ? null : new TreeNode(parseInt(vals[p]))
        p += 1
        dfs(parent.left)

        parent.right = vals[p] === '' ? null : new TreeNode(parseInt(vals[p]))
        p += 1
        dfs(parent.right)
    }

    dfs(root)

    return root
}

// showTime(() => {
//     // console.log(lk([ 'daeabc', 'aaeb', 'abacdc' ]))
// })

let root: TreeNode = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: null
    },
    right: {
        val: 4,
        left: {
            val: 5,
            left: {
                val: 6,
                left: null,
                right: null
            },
            right: null
        },
        right: null
    }
}

let s = serialize(root)
let d = deserialize(s)

console.log(s)
console.log(d)
console.log(JSON.stringify(root) === JSON.stringify(d))

export {
    lk
}
