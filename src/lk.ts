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

function lk(source: number[][], target: number[][]): number {
    const len_y = source.length, len_x = source[0].length
    const count: number[] = []

    for (let y = 0; y < len_y; y ++) {
        for (let x = 0; x < len_x; x ++) {
            count[source[y][x]] =(count[source[y][x]] ?? 0) + 1
        }
    }

    console.log(count)

    for (let y = 0; y < len_y; y ++) {
        for (let x = 0; x < len_x; x ++) {
            if(count[target[y][x]] !== undefined) count[target[y][x]] -=1
        }
    }

    return count.reduce((prev, curr) => {
        return prev + (curr > 0 ? curr : 0)
    }, 0)
}


console.log(lk([[1,3],[5,4]],
    [[3,1],[6,4]]))



// const showTime = (fn: () => void) => {
//     console.time('fn')
//     fn()
//     console.timeEnd('fn')
// }
// showTime(() => {
//     console.log(lk('pale', 'ple'))
// })

export {
    lk
}
