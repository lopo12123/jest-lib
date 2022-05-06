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

function lk(image: number[][], sr: number, sc: number, newColor: number): number[][] {
    const initColor = image[sr][sc]
    const [ x_len, y_len ] = [ image[0].length, image.length ]

    const painted = new Set<string>()

    const gpl = (curr_x: number, curr_y: number, ifX: boolean) => {
        if(ifX) {
            for (let x1 = curr_x - 1; x1 >= 0; x1--) {
                if(image[curr_y][x1] === initColor && !painted.has(`${ x1 },${ curr_y }`)) {
                    image[curr_y][x1] = newColor
                    painted.add(`${ x1 },${ curr_y }`)
                    // console.log(`x-: (${curr_x}, ${curr_y})`, x1, curr_y)
                    gpl(x1, curr_y, false)
                }
                else break
            }
            for (let x2 = curr_x + 1; x2 < x_len; x2++) {
                if(image[curr_y][x2] === initColor && !painted.has(`${ x2 },${ curr_y }`)) {
                    image[curr_y][x2] = newColor
                    painted.add(`${ x2 },${ curr_y }`)
                    // console.log(`x+: (${curr_x}, ${curr_y})`, x2, curr_y)
                    gpl(x2, curr_y, false)
                }
                else break
            }
        }
        else {
            for (let y1 = curr_y - 1; y1 >= 0; y1--) {
                if(image[y1][curr_x] === initColor && !painted.has(`${ curr_x },${ y1 }`)) {
                    image[y1][curr_x] = newColor
                    painted.add(`${ curr_x },${ y1 }`)
                    // console.log(`y-: (${curr_x}, ${curr_y})`, curr_x, y1)
                    gpl(curr_x, y1, true)
                }
                else break
            }
            for (let y2 = curr_y + 1; y2 < y_len; y2++) {
                if(image[y2][curr_x] === initColor && !painted.has(`${ curr_x },${ y2 }`)) {
                    image[y2][curr_x] = newColor
                    painted.add(`${ curr_x },${ y2 }`)
                    // console.log(`y+: (${curr_x}, ${curr_y})`, curr_x, curr_y)
                    gpl(curr_x, y2, true)
                }
                else break
            }
        }
    }

    image[sr][sc] = newColor
    gpl(sc, sr, true)
    gpl(sc, sr, false)

    return image
}

console.log(lk([[ 0, 0, 0 ], [ 0, 0, 1 ] ], 1, 0, 2))

export {
    lk
}
