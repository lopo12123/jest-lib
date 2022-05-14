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

function lk(cards: number[], cnt: number): number {
    cards.sort((a, b) => b - a)

    let last_odd = 0, last_even = 0
    let sum = 0
    for (let i = 0; i < cnt; i++) {
        sum += cards[i]

        if(cards[i] % 2 === 0) last_even = cards[i]
        else last_odd = cards[i]
    }

    if(sum % 2 === 0) return sum

    let replace_odd = 0, replace_even = 0
    for (let i = cnt; i < cards.length; i++) {
        if(last_odd > 0 && cards[i] % 2 === 0 && replace_odd === 0) replace_odd = sum - last_odd + cards[i]
        if(last_even > 0 && cards[i] % 2 === 1 && replace_even === 0) replace_even = sum - last_even + cards[i]
    }

    return Math.max(replace_odd, replace_even)
}

console.log(lk([ 1, 2, 8, 9 ], 3))

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
