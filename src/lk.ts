// class ListNode {
//     val: number
//     next: ListNode | null
//
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//     }
// }

// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.left = (left === undefined ? null : left)
//         this.right = (right === undefined ? null : right)
//     }
// }

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

function lk(materials: number[], cookbooks: number[][], attribute: number[][], limit: number): number {
    // 所有能做的
    const valid_foods_with_attr: number[][] = []

    for (let i = 0; i < cookbooks.length; i++) {
        let flag = true
        for (let j = 0; j < 5; j++) {
            if(materials[j] < cookbooks[i][j]) {
                flag = false
                break
            }
        }
        if(flag) {
            valid_foods_with_attr.push([ ...cookbooks[i], ...attribute[i] ])
        }
    }

    let max_taste = -1
    for (let i = 1; i < 2 ** valid_foods_with_attr.length; i++) {
        const i_have_now = [ ...materials ]
        let full = 0, taste = 0
        let choices = i, curr = 0

        while (choices > 0) {
            if((choices & 1) === 0) {
                curr += 1
                choices >>= 1
                continue
            }

            for (let m = 0; m < 5; m++) i_have_now[m] -= valid_foods_with_attr[curr][m]

            if(i_have_now.some(x => x < 0)) {
                taste = -1
                break
            }

            full += valid_foods_with_attr[curr][6]
            taste += valid_foods_with_attr[curr][5]

            choices >>= 1
            curr += 1
        }
        if(full >= limit) max_taste = Math.max(max_taste, taste === 0 ? -1 : taste)
    }

    return max_taste
}

console.log(lk(
    [ 3, 2, 4, 1, 2 ],
    [ [ 1, 1, 0, 1, 2 ], [ 2, 1, 4, 0, 0 ], [ 3, 2, 4, 1, 0 ] ],
    [ [ 3, 2 ], [ 2, 4 ], [ 7, 6 ] ],
    5
))

/**
 * a  a  a
 * a aa aa
 * aa aa
 * a  a
 */

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
