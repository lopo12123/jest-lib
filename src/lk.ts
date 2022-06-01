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

function lk(num: number): string {
    let s = ''

    while (num >= 1000) {
        s += 'M'
        num -= 1000
    }
    // num < 1000
    if(num >= 900) {
        s += 'CM'
        num -= 900
        // num < 100
    }
    else {
        if(num >= 500) {
            s += 'D'
            num -= 500
        }
        // num < 500
        if(num >= 400) {
            s += 'CD'
            num -= 400
        }
        else {
            while (num >= 100) {
                s += 'C'
                num -= 100
            }
        }
        // num < 100
    }
    // num < 100
    if(num >= 90) {
        s += 'XC'
        num -= 90
    }
    else {
        if(num >= 50) {
            s += 'L'
            num -= 50
        }
        // num < 50
        if(num >= 40) {
            s += 'XL'
            num -= 40
        }
        else {
            while (num >= 10) {
                s += 'X'
                num -= 10
            }
        }
        // num < 10
    }
    // num < 10

    s += ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'][num]

    return s
}

console.log(lk(1))
console.log(lk(3))
console.log(lk(9))
console.log(lk(58))  // LVIII
console.log(lk(1994))  // MCMXCIV

export {
    lk
}
