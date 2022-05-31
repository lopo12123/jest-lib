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

function lk(words: string[]): string {
    const all_ch_i_have = new Set(words[0])

    const who_comes_to_me = new Map<string, Set<string>>()

    words.reduce((prev, curr) => {
        let p = 0

        while (p < prev.length && p < curr.length) {
            all_ch_i_have.add(curr[p])

            if(prev[p] !== curr[p]) {
                if(!who_comes_to_me.has(curr[p]))
                    who_comes_to_me.set(curr[p], new Set<string>([ prev[p] ]))
                else
                    who_comes_to_me.get(curr[p])!.add(prev[p])
            }
            p++
        }

        while (p < curr.length) all_ch_i_have.add(curr[p])

        return curr
    })

    const all_heads: string[] = []

    who_comes_to_me.forEach((pres, me) => {
        if(pres.size === 0) all_heads.push(me)
    })

    // 成环
    if(all_heads.length === 0) return ''

    while (all_heads.length > 0) {
        let curr_ch = all_heads.shift()!
        who_comes_to_me.forEach((pres, me) => {
            pres.delete(curr_ch)
            if(pres.size === 0) {}
        })
    }
    const queue: string[] = []


}

export {
    lk
}
