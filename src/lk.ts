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

    let layer_1 = -1
    let res: boolean = false

    const dfs = (sub: TreeNode | null, layer: number) => {
        if(sub === null) return
        else {
            if((sub.left?.val === x || sub.left?.val === y)
                && (sub.right?.val === x || sub.right?.val === x)) {
                res = false
                return;
            }
            else {
                if(sub.left?.val === x || sub.left?.val === y) {
                    if(layer_1 === layer) {
                        res = true
                        return
                    }
                    else {
                        layer_1 = layer
                    }
                }
                if(sub.right?.val === x || sub.right?.val === y) {
                    if(layer_1 === layer) {
                        res = true
                        return
                    }
                    else {
                        layer_1 = layer
                    }
                }

                dfs(sub.left, layer +1)
                dfs(sub.right, layer + 1)
            }
        }
    }

    dfs(root, 1)

    return res
}

const root: TreeNode = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: null,
            right: null
        }
    },
    right: {
        val: 5,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}

console.log(lk(root, 4, 3))

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
