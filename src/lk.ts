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

function lk(n: number): number {
    const sum_of_num = (t: number) => {
        let sum = 0
        while (t > 0) {
            sum += t % 10
            t = Math.floor(t / 10)
        }
        return sum
    }

    const map: number[][] = []

    for (let i = 1; i <= n; i++) {
        if(map[sum_of_num(i)]) map[sum_of_num(i)].push(i)
        else map[sum_of_num(i)] = [ i ]
    }
    let max_group_count = 0
    let max_group_size = 0
    map.forEach((group) => {
        if(max_group_size === group.length) max_group_count += 1
        else if(max_group_size < group.length) {
            max_group_size = group.length
            max_group_count = 1
        }
    })

    return max_group_count
}

console.log(lk(13))  // 4
console.log(lk(2))  // 2
console.log(lk(15))  // 6

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
