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

function lk(num: number): number {
    let curr_weight = Math.floor(Math.log10(num))
    const odd: number[] = [], odd_weight: number[] = []
    const even: number[] = [], even_weight: number[] = []

    // 权值  bit * 10 ^ weight
    let weight = 0
    while (num > 0) {
        let bit = num % 10
        if(bit % 2 === 1) {
            odd.push(bit)
            odd_weight.unshift(weight)
        }
        else {
            even.push(bit)
            even_weight.unshift(weight)
        }

        num = (num - bit) / 10
        weight += 1
    }
    odd.sort((a, b) => b - a)
    even.sort((a, b) => b - a)

    let sum = 0
    let p_odd = 0, p_even = 0

    while (curr_weight >= 0) {
        if(curr_weight === odd_weight[p_odd]) {
            sum += odd[p_odd] * (10 ** curr_weight)
            p_odd += 1
        }
        else if(curr_weight === even_weight[p_even]) {
            sum += even[p_even] * (10 ** curr_weight)
            p_even += 1
        }
        curr_weight -= 1
    }

    return sum
}

console.log(lk(1234))  // 3412
console.log(lk(65875))  // 87655

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
