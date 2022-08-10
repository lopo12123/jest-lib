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

// class Node {
//     val: number
//     next: Node | null
//
//     constructor(val?: number, next?: Node) {
//         this.val = (val === undefined ? 0 : val);
//         this.next = (next === undefined ? null : next);
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

function lk(equation: string): string {
    const [left, right] = equation.split('=')

    // 左边匹配 x
    const xs_left = left.match(/(\+|-)?[0-9]*x/g) ?? []
    // 左边有几个 x
    const x_left = xs_left === null
        ? 0
        : xs_left.reduce((prev, curr) => {
            return prev + (curr === '-x'
                ? -1
                : (parseInt(curr.match(/(\+|-)?[0-9]+/)?.[0] ?? '1') || 0))
        }, 0)
    // 左边其他值
    const v_left = parseInt(eval(left.replace(/(\+|-)?[0-9]*x/g, ' ')) ?? '0')

    // 右边匹配 x
    const xs_right = right.match(/(\+|-)?[0-9]*x/g) ?? []
    // 右边有几个 x
    const x_right = xs_right === null
        ? 0
        : xs_right.reduce((prev, curr) => {
            return prev + (curr === '-x'
                ? -1
                : (parseInt(curr.match(/(\+|-)?[0-9]+/)?.[0] ?? '1') || 0))
        }, 0)
    // 右边其他值
    const v_right = parseInt(eval(right.replace(/(\+|-)?[0-9]*x/g, ' ')) ?? '0')

    if (x_left === x_right && v_left !== v_right) return 'No solution'

    const x = (v_right - v_left) / (x_left - x_right)

    console.log(xs_left, x_left, v_left)
    console.log(xs_right, x_right, v_right)

    return isNaN(x) ? 'Infinite solutions' : `x=${x}`
}

// console.log(lk('x+5-3+x=6+x-2'))
console.log(lk('x=x'))
console.log(lk('x=-x'))

export {
    lk
}
