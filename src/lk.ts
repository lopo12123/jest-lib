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

function lk(s: string): string {
    // 全部字符
    const allCh = new Set(s)
    // 符合的字符
    const validCh = new Set()
    allCh.forEach((ch) => {
        if(allCh.has(ch.toUpperCase()) && allCh.has(ch.toLowerCase())) validCh.add(ch)
    })

    const maybe: string[] = []
    let last_idx = -1
    // 使用数组溢出的 undefined 值 做结尾截断
    for (let i = 0; i <= s.length; i++) {
        if(!validCh.has(s[i])) {
            // 至少要两个字符
            if(i - last_idx > 1) {
                maybe.push(s.slice(last_idx, i))
                last_idx = -1
            }
        }
        else if(last_idx === -1) last_idx = i
    }

    let max_len = 0, max_idx = -1

    for (let i = 0; i < maybe.length; i++) {
        // 检查并比较长度
    }

    return max_idx === -1 ? '' : maybe[max_idx]
}

console.log(lk('YazaAay'))  // aAa
console.log(lk('Bb'))  // Bb

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
