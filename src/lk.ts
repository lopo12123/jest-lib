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

function lk(arr: number[]) {
    let p = 0, leftEnd = arr.length - 1
    let zeroStart = -1, zeroEnd = 0
    while (p < leftEnd) {
        if(arr[p] === 0) {
            leftEnd -= 1
            if(zeroStart < 0) zeroStart = p
            zeroEnd = p
        }
        p += 1
    }

    if(zeroStart >= 0) {
        for (let i = arr.length - 1; i >= zeroStart; i--) {
            arr[i] = arr[leftEnd]
            if(arr[leftEnd] === 0 && leftEnd <= zeroEnd) {
                arr[i - 1] = 0
                i -= 1
            }
            leftEnd -= 1
        }
    }
}

let arr = [ 1, 1, 0, 2, 0, 3 ]  // 1 1 0 0 2 0
lk(arr)
console.log(arr)

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
