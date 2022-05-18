// region 小于n的数字个数
// region 无边界
// const below_me = (me: number) => {
//     me -= 1
//     let count = Math.ceil(me / 2)
//     for (let i = Math.floor(me / 2); i >= 1; i--) {
//         count += Math.floor(me / i)
//     }
//     return count
// }
// console.log('1', below_me(1))  // 0
// console.log('2', below_me(2))  // 1
// console.log('3', below_me(3))  // 3
// console.log('4', below_me(4))  // 5
// console.log('5', below_me(5))  // 8
// console.log('6', below_me(6))  // 10
// console.log('7', below_me(7))  // 14
// console.log('8', below_me(8))  // 16
// endregion

// region 有边界
// const below_me_limit = (me: number, row: number, col: number) => {
//     me -= 1
//     // 完整的行数
//     let count = Math.floor(me / col) * col
//     for (let i = Math.floor(me / col) + 1; i <= row; i++) {
//         count += Math.floor(me / i)
//     }
//     return count
// }
// console.log('1', below_me_limit(1, 3, 3))  // 0
// console.log('2', below_me_limit(2, 3, 3))  // 1
// console.log('3', below_me_limit(3, 3, 3))  // 3
// console.log('4', below_me_limit(4, 3, 3))  // 5
// console.log('5', below_me_limit(5, 3, 3))  // 6
// console.log('6', below_me_limit(6, 3, 3))  // 6
// console.log('7', below_me_limit(7, 3, 3))  // 8
// console.log('8', below_me_limit(8, 3, 3))  // 8
// endregion
// endregion

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

function lk(n: number, start: number): number {
    // define: fn_xor(start, end)
    // fn_xor(a, b) = fn_xor(0, b) ^ fn_xor(0,a - 1)

    // define: fn(n) = fn_xor(0, n)
    // [n >= 0]
    // fn(4n) = 4n
    // fn(4n+1) = 1
    // fn(4n+2) = 4n+3
    // fn(4n+3) = 0
    const fn = (n: number) => {
        if(n === -1) return 0
        switch(n % 4) {
            case 3:
                return 0
            case 2:
                return n + 1
            case 1:
                return 1
            default:
                return n
        }
    }

    // (a<<x)^(b<<x)^...^(n<<X) = (a^b^...^n)<<x

    // 偶数序列: /2 => fn => *2
    if(start % 2 === 0) return 2 * (fn(n - 1 + start / 2) ^ fn(start / 2 - 1))
    // 奇数序列 - 奇数个: -1 => /2 => fn => * 2 + 1
    // 奇数序列 - 偶数个: -1 => /2 => fn => * 2
    else return 2 * (fn(n - 1 + (start - 1) / 2) ^ fn((start - 1) / 2 - 1)) + n % 2
}

// [0,2,4,6,8] => [0,1,2,3,4]
console.log('5,0: ', lk(5, 0))  // 8
// [2,4,6,8,10] => [1,2,3,4,5]
console.log('5,2: ', lk(5, 2))  // 8
// [3,5,7,9] => [2,4,6,8] => [1,2,3,4]
console.log(lk(4, 3))  // 8
// [7] => [6] => [3]
console.log(lk(1, 7))  // 7

// n = 4, start = 5
// [5, 7, 9, 11]
// [2, 3, 4, 5]
// [4, 5, 6, 7]

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
