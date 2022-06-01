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

const showTime = (fn: () => void) => {
    console.time('fn')
    fn()
    console.timeEnd('fn')
}

function lk(matchsticks: number[]): boolean {
    const len = matchsticks.length
    const C = matchsticks.reduce((prev, curr) => prev + curr)

    if(C % 4 !== 0) return false

    const if_can_divide_2 = (arr: number[], sum: number) => {
        const size = arr.length

        for (let i = 0; i < 2 ** size; i++) {
            let curr = 0
            let select = i
            while (select > 0) {
                curr += arr[select & 0b1]
                select >>= 1
            }
            if(curr === sum / 2) return true
        }
        return false
    }

    for (let i = 0; i < 2 ** len; i++) {
        let select = i, idx = 0
        const part: number[][] = [ [], [] ]
        let sum = [ 0, 0 ]
        while (idx < len) {
            part[select & 0b1].push(matchsticks[idx])
            sum[select & 0b1] += matchsticks[idx]
            select >>= 1
            idx += 1
        }

        if(sum[0] === sum[1]) {
            if(if_can_divide_2(part[0], sum[0]) && if_can_divide_2(part[1], sum[1])) return true
        }
    }

    return false
}

// 1234567
// 7 1 2 4
// 6 3 5

console.log(lk([ 1, 1, 2, 2, 2 ]))  // true
console.log(lk([ 3, 3, 3, 3, 4 ]))  // false
console.log(lk([ 1, 2, 3, 4, 5, 6, 7 ]))  // true
console.log(lk([ 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6 ]))  // true

export {
    lk
}
