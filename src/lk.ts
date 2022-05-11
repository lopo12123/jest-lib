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

function lk(str1: string, str2: string): string {
    const part1: string[] = []
    let double = str1 + str1
    let len = str1.length, i = Math.floor(Math.sqrt(len))
    while (i >= 1) {
        if(Math.floor(len / i) === len / i) {
            if(str1 === double.slice(i, i + len)) part1.push(str1.slice(0, i))
            if(i !== len / i && str1 === double.slice(len / i, len / i + len)) part1.unshift(str1.slice(0, len / i))
        }
        i -= 1
    }

    len = str2.length
    for (let i = 0; i < part1.length; i++) {
        if(str2 === (str2.slice(part1[i].length) + part1[i]) && (len / part1[i].length === Math.floor(len / part1[i].length))) return part1[i]
    }

    return ''
}

console.log(lk('leet', 'code'))

// const showTime = (fn: () => void) => {
//     console.time('fn')
//     fn()
//     console.timeEnd('fn')
// }
// showTime(() => {
//     // console.log(lk([ 'daeabc', 'aaeb', 'abacdc' ]))
// })

export {
    lk
}
