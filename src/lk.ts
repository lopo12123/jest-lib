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

function lk(s1: string, s2: string): boolean {
    if(s1.length !== s2.length) return false
    if(s1 === '' && s2 === '') return true

    let compare_part = 1
    const len = s1.length
    const idx_of_head: number[] = []
    let p_double_string = 0, p_s2 = 0

    while (p_double_string < len && compare_part <= 2) {
        if(s1[p_double_string] === s2[0] && p_s2 !== 0) idx_of_head.push(p_double_string)

        if(s1[p_double_string] === s2[p_s2]) {
            p_double_string += 1
            p_s2 += 1
        }
        else {
            p_double_string = idx_of_head.shift() ?? (p_double_string + Math.max(p_s2, 1))
            p_s2 = 0
        }

        if(p_s2 === len) return true

        if(p_double_string >= len) {
            compare_part += 1
            p_double_string %= len
        }
    }
    return false
}

console.log(lk('abc', 'bca'))  // t
console.log(lk('aba', 'aab'))  // t
console.log(lk('aba', 'bab'))  // f

export {
    lk
}
