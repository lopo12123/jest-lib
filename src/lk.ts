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

function lk(bills: number[]): boolean {
    const iHave = new Map<number, number>()

    for (let i = 0; i < bills.length; i ++) {
        const allMy5 = iHave.get(5) ?? 0
        const allMy10 = iHave.get(10) ?? 0

        switch (bills[i]) {
            case 5:
                iHave.set(5, allMy5 + 1)
                break
            case 10:
                if(allMy5 === 0) return false
                else {
                    iHave.set(5, allMy5 - 1)
                    iHave.set(10, allMy10 + 1)
                }
                break
            case 20:
                if(allMy5 === 0 || (allMy10 === 0 && allMy5 < 3)) return false
                else {
                    if(allMy10 > 0) {
                        iHave.set(5, allMy5 - 1)
                        iHave.set(10, allMy10 - 1)
                    }
                    else {
                        iHave.set(5, allMy5 - 3)
                    }
                }
                break
        }
    }

    return true
}

console.log(lk([5,5,5,10,20]))

export {
    lk
}
