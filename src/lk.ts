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

function lk(img: number[][]): number[][] {
    const [ xLen, yLen ] = [ img[0].length, img.length ]

    const filter = (thisX: number, thisY: number) => {
        let sum = 0
        let ceil_count = 0
        for (let y = Math.max(0, thisY - 1); y <= Math.min(yLen - 1, thisY + 1); y++) {
            for (let x = Math.max(0, thisX - 1); x <= Math.min(xLen - 1, thisX + 1); x++) {
                sum += img[y][x]
                ceil_count += 1
            }
        }
        return Math.floor(sum / ceil_count)
    }

    const out: number[][] = []
    for (let y = 0; y < yLen; y++) {
        out[y] = []
        for (let x = 0; x < xLen; x++) {
            out[y][x] = filter(x, y)
        }
    }
    return out
}

console.log(lk([[1,1,1],[1,0,1],[1,1,1]]))

export {
    lk
}
