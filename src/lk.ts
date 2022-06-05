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

const showTime = (fn: () => void) => {
    console.time('fn')
    fn()
    console.timeEnd('fn')
}

function lk(nums: number[], operations: number[][]): number[] {
    const finalOps = new Map()  // 换后的 - 换之前的

    for (let i = 0; i < operations.length; i++) {
        if(finalOps.has(operations[i][0])) {
            finalOps.set(operations[i][1], finalOps.get(operations[i][0]))
            finalOps.delete(operations[i][0])
        }
        else {
            finalOps.set(operations[i][1], operations[i][0])
        }
    }

    const reverse = new Map()

    finalOps.forEach((val, key) => {
        reverse.set(val, key)
    })

    for (let i = 0; i < nums.length; i++) {
        if(reverse.has(nums[i])) {
            nums[i] = reverse.get(nums[i])
        }
    }

    return nums
}

class Solution {
    randPoint: () => number[]

    constructor(radius: number, x_center: number, y_center: number) {
        this.randPoint = () => {
            const theta = Math.random() * 2 * Math.PI  // x PI (max is 2 PI)
            const r = Math.sqrt(Math.random() * radius ** 2)

            return [ x_center + r * Math.sin(theta), y_center + r * Math.cos(theta) ]
        }
    }

    // randPoint(): number[] {
    //
    // }
}


export {
    lk
}
