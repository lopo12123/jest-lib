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

function lk(logs: string[]): string[] {
    // 数字的 不变
    const log_num = logs.filter((log => {
        return /[0-9]/.test(log.split(' ').slice(1).join(''))
    }))
    // 字母的 字典序排序
    const log_word = logs.filter((log => {
        return /[a-zA-Z]/.test(log.split(' ').slice(1).join(''))
    })).sort((a, b) => {
        const[label_a, ...content_a] = a.split(' ')
        const[label_b, ...content_b] = b.split(' ')

        if(content_a.join('') === content_b.join('')) return label_a < label_b ? -1 : 1
        else return content_a.join(' ') < content_b.join(' ') ? -1 : 1
    })

    console.log('word: ', log_word)
    console.log('num: ', log_num)

    return [...log_word, ...log_num]
}

console.log(lk(["j mo", "5 m w", "g 07", "o 2 0", "t q h"]))

export {
    lk
}
