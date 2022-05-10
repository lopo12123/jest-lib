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

const showTime = (fn: () => void) => {
    console.time('fn')
    fn()
    console.timeEnd('fn')
}

function lk(words: string[]): string[] {
    let chs: string[] = [ ...(words[0] ?? []) ].sort()

    const in_common = (s1: string[], s2: string[]) => {
        const common: string[] = []
        let i1 = 0, i2 = 0

        while (i1 < s1.length && i2 < s2.length) {
            if(s1[i1] === s2[i2]) {
                common.push(s1[i1])
                i1 += 1
                i2 += 1
            }
            else if(s1[i1] < s2[i2]) i1 += 1
            else if(s1[i1] > s2[i2]) i2 += 1
        }

        return common
    }

    for (let i = 1; i < words.length; i++) {
        chs = in_common(chs, words[i].split('').sort())
    }

    return chs
}

showTime(() => {
    console.log(lk([ 'daeabc', 'aaeb', 'abacdc' ]))
})

export {
    lk
}
