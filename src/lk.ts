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

function lk(first: string, second: string): boolean {
    if(first.length === second.length) {
        let diff = 0
        for (let i = 0; i < first.length; i++) {
            if(first[i] !== second[i]) {
                if(diff === 1) return false
                else diff = 1
            }
        }
        return true
    }
    else {
        if(Math.abs(first.length - second.length) === 1) {
            let op = 0
            let p1 = 0, p2 = 0
            while (p1 < first.length && p2 < second.length) {
                if(first[p1] === second[p2]) {
                    p1 += 1
                    p2 += 1
                }
                else {
                    if(op === 1) return false
                    else {
                        first.length > second.length ? (p1 += 1) : (p2 += 1)
                        op = 1
                    }
                }
            }
            return true
        }
        else return false
    }
}

console.log(lk('pla', 'ple'))
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
