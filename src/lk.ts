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

function lk(s: string, goal: string): boolean {
    const s_len = s.length
    const goal_len = goal.length

    if(s_len === 1 || goal_len === 1 || s_len !== goal_len) return false
    else {
        const existChar = new Set<string>()
        let ifDouble = false

        let diff: number = 0, diffChar: [ string, string ] = [ '', '' ]  // [s[i], goal[i]]
        for (let i = 0; i < s_len; i++) {
            if(!ifDouble) {
                ifDouble = existChar.has(s[i])
                existChar.add(s[i])
            }
            if(s[i] !== goal[i]) {
                console.log(diff, diffChar)
                if(diff === 2) return false
                else if(diff === 1) {
                    if(s[i] !== diffChar[1] || goal[i] !== diffChar[0]) return false
                }
                diff += 1
                diffChar = [ s[i], goal[i] ]
            }
        }

        console.log(diff, ifDouble)

        return (diff === 0 && ifDouble) || diff === 2
    }
}

console.log(lk('ab', 'ab'))

export {
    lk
}
