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

function lk(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const leaf1: number[] = []

    let flag = true

    const dfs = (sub: TreeNode | null) => {
        if(sub === null) return
        else {
            if(sub.left === null && sub.right === null) {
                leaf1.push(sub.val)
            }
            else {
                if(sub.left) dfs(sub.left)
                if(sub.right) dfs(sub.right)
            }
        }
    }
    const dfs_compare = (sub: TreeNode | null) => {
        if(sub === null) return
        else {
            if(sub.left === null && sub.right === null) {
                if(leaf1.length === 0) flag = false
                else if(sub.val === leaf1[0]) leaf1.shift()
                else return
            }
            else {
                if(sub.left) dfs_compare(sub.left)
                if(sub.right) dfs_compare(sub.right)
            }
        }
    }

    dfs(root1)
    dfs_compare(root2)

    console.log(leaf1, flag)

    return leaf1.length === 0 && flag
}

const root1: TreeNode = {
    val: 3,
    left: {
        val: 5,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 2,
            left: {
                val: 7,
                left: null,
                right: null
            },
            right: {
                val: 4,
                left: null,
                right: null
            }
        }
    },
    right: {
        val: 1,
        left: {
            val: 9,
            left: null,
            right: null
        },
        right: {
            val: 8,
            left: null,
            right: null
        }
    }
}
const root2: TreeNode = {
    val: 3,
    left: {
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
    },
    right: {
        val: 1,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 2,
            left: {
                val: 9,
                left: null,
                right: null
            },
            right: {
                val: 11,
                left: {
                    val: 8,
                    left: null,
                    right: null
                },
                right: {
                    val: 10,
                    left: null,
                    right: null
                }
            }
        }
    }
}

lk(root1, root2)

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
