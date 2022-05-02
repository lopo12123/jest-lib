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

function lk(list1: string[], list2: string[]): string[] {
    let res: string[] = []
    let minIndexSum = -1

    list1.forEach((item, index) => {
        const indexIn2 = list2.findIndex(item2 => item2 === item)
        if(indexIn2 !== -1) {
            if(minIndexSum === -1) {
                minIndexSum = index + indexIn2
                res.push(item)
            }
            else {
                const sum = indexIn2 + index
                if(sum < minIndexSum) {
                    minIndexSum = sum
                    res = [item]
                }
                else if(sum === minIndexSum) {
                    res.push(item)
                }
            }
        }
        console.log(item, indexIn2, res)
    })

    return res
}

console.log(lk(
    ["Shogun","Piatti","Tapioca Express","Burger King","KFC"],
        ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]))

export {
    lk
}
