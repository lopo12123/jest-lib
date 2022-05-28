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

function lk(mat: number[][], target: number[][]): boolean {
    const n = mat.length

    // [x, y]
    let guess = true
    for (let y = 0; y < n; y++) {
        for (let x = 0; x < n; x++) {
            if(mat[y][x] !== target[y][x]) {
                guess = false
                break
            }
        }
        if(!guess) break
    }
    if(guess) return true

    // [n - 1 - y, x]
    guess = true
    for (let y = 0; y < n; y++) {
        for (let x = 0; x < n; x++) {
            if(mat[x][n - 1 - y] !== target[y][x]) {
                guess = false
                break
            }
        }
        if(!guess) break
    }
    if(guess) return true

    // [n - 1 - x, n - 1 - y]
    guess = true
    for (let y = 0; y < n; y++) {
        for (let x = 0; x < n; x++) {
            if(mat[n - 1 - y][n - 1 - x] !== target[y][x]) {
                guess = false
                break
            }
        }
        if(!guess) break
    }
    if(guess) return true

    // [y, n - 1 - x]
    guess = true
    for (let y = 0; y < n; y++) {
        for (let x = 0; x < n; x++) {
            if(mat[n - 1 - x][y] !== target[y][x]) {
                guess = false
                break
            }
        }
        if(!guess) break
    }

    return guess
}

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
