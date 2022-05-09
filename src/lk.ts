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

function lk(words: string[], order: string): boolean {
    if(words.length === 1) return true

    const map: { [k: string]: number } = {}

    for (let i = 0; i < 26; i++) {
        map[order[i]] = i
    }

    const ifInOrder = (small: string, big: string) => {
        const len = Math.max(small.length, big.length)
        for (let i = 0; i < len; i++) {
            if(big[i] === undefined) {
                return false
            }
            if(map[small[i]] > map[big[i]]) {
                return false
            }
            else if(map[small[i]] < map[big[i]]){
                return true
            }
        }
        return true
    }

    for (let i = 1; i < words.length; i++) {
        if(!ifInOrder(words[i - 1], words[i])) return false
    }
    return true
}

console.log(lk(["ubg","kwh"],
"qcipyamwvdjtesbghlorufnkzx"))

export {
    lk
}
