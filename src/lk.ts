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
((p: string) => {
    const set = new Set(p)

    let l = 0
    while (l < p.length - 1) {
        for (let i = l + 1; i < p.length; i++) {
            if((p.charCodeAt(i) - p.charCodeAt(i - 1) === 1)
                || (p[i - 1] === 'z' && p[i] === 'a')) set.add(p.slice(l, i + 1))
            else break
        }

        l += 1
    }

    return set.size
});

function lk(p: string): number {
    const len = p.length
    const max_len = new Array(26).fill(0)

    let l = 0
    let move = 1
    while (move < len) {
        if((p.charCodeAt(move) - p.charCodeAt(move - 1) + 26) % 26 !== 1) {
            max_len[p.charCodeAt(l) - 97] = Math.max(max_len[p.charCodeAt(l) - 97], move - l)
            l = move
        }
        move += 1
    }
    max_len[p.charCodeAt(l) - 97] = Math.max(max_len[p.charCodeAt(l) - 97], move - l)

    let max_idx = 0
    for (let i = 0; i < 26; i++) {
        if(max_len[i] > max_len[max_idx]) max_idx = i
    }

    let sum = max_len[max_idx]
    for (let i = max_idx + 1; i < max_idx + 26; i++) {
        max_len[i % 26] = Math.max(max_len.at(i % 26), max_len.at((i - 1) % 26) - 1)
        sum += max_len[i % 26]
    }

    return sum
}

// console.log(lk('a'))  // 1
// console.log(lk('cac'))  // 2
// console.log(lk('zab'))  // 6
console.log(lk('abcd'))  // 10
console.log(lk('abcdefg'))  // 28

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
