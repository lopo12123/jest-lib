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

function lk(board: string[][]): number {
    let count = 0
    for (let y = 0; y < 8; y ++) {
        count = 0
        for (let x = 0; x < 8; x ++) {
            if(board[y][x] === 'p') count = 1
            else if(board[y][x] === 'B') count = 0
            else if(board[y][x] === 'R') {
                for (let x_r = x + 1; x_r < 8; x_r ++) {
                    if(board[y][x_r] === 'p') {
                        count += 1
                        break
                    }
                    else if(board[y][x_r] === 'B') {
                        break
                    }
                }
                for (let y_l = y - 1; y_l >= 0; y_l --) {
                    if(board[y_l][x] === 'p') {
                        count += 1
                        break
                    }
                    else if(board[y_l][x] === 'B') {
                        break
                    }
                }
                for (let y_r = y + 1; y_r < 8; y_r ++) {
                    if(board[y_r][x] === 'p') {
                        count += 1
                        break
                    }
                    else if(board[y_r][x] === 'B') {
                        break
                    }
                }
                return count
            }
        }
    }
    return count
}

export {
    lk
}
