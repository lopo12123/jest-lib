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

function lk(mat: number[][]): number {
    const y_len = mat.length, x_len = mat[0].length
    let count = 0

    for (let y = 0; y < y_len; y++) {
        let one_x_idx = -1
        for (let x = 0; x < x_len; x++) {
            if(mat[y][x] === 1) {
                if(one_x_idx !== -1) {
                    one_x_idx = -1
                    break
                }
                else one_x_idx = x
            }
        }
        if(one_x_idx !== -1) {
            let one_y_count = 0
            for (let y_idx = 0; y_idx < y_len; y_idx++) {
                if(mat[y_idx][one_x_idx] === 1) {
                    if(one_y_count === 1) {
                        one_y_count = 0
                        break
                    }
                    else one_y_count = 1
                }
            }
            count += one_y_count
        }
    }

    return count
}

console.log(lk([
    [ 1, 0, 0 ],
    [ 0, 1, 0 ],
    [ 1, 0, 0 ]
]))  // 1
console.log(lk([
    [ 1, 0, 0 ],
    [ 0, 1, 0 ],
    [ 0, 0, 1 ]
]))  // 3

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
