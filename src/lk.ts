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

function lk(root: TreeNode, x: number, y: number): boolean {
    if(root.val === x || root.val === y) return false

    let layer_x: number | undefined = undefined, parent_x: number | undefined = undefined
    let layer_y: number | undefined = undefined, parent_y: number | undefined = undefined

    const dfs = (sub: TreeNode | null, layer: number, parent: number) => {
        if(sub === null) return
        else {
            if(sub.val === x) {
                layer_x = layer
                parent_x = parent
            }
            else if(sub.val === y) {
                layer_y = layer
                parent_y = parent
            }

            if(layer_x !== undefined && layer_y !== undefined) return;
            else {
                dfs(sub.left, layer + 1, sub.val)
                dfs(sub.right, layer + 1, sub.val)
            }
        }
    }

    dfs(root.left, 1, root.val)
    dfs(root.right, 1, root.val)

    return layer_x === layer_y && parent_x !== parent_y
}

// const root: TreeNode = {
//     val: 1,
//     left: {
//         val: 2,
//         left: {
//             val: 3,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 4,
//             left: null,
//             right: null
//         }
//     },
//     right: {
//         val: 5,
//         left: {
//             val: 6,
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
const root: TreeNode = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: {
            val: 4,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
}

console.log(lk(root, 2, 3))

// const showTime = (fn: () => void) => {
//     console.time('fn')
//     fn()
//     console.timeEnd('fn')
// }
// showTime(() => {
//     // console.log(lk([ 'daeabc', 'aaeb', 'abacdc' ]))
// })

export {
    lk
}
