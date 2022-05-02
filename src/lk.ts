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

function lk(nums: number[]): number {
    nums.sort((a, b) => a - b)
    nums.push(nums[nums.length - 1] + 3)

    let max = 0

    const countStack = [ 0 ]
    let lastPushVal = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if(lastPushVal !== nums[i]) {
            countStack.push(i)
            lastPushVal = nums[i]
        }
        if(nums[i] - nums[countStack[0]] > 1) {
            if(nums[i - 1] - nums[countStack[0]] === 1) max = Math.max(max, i - countStack[0])
            countStack.shift()
        }
    }

    return max
}

console.log(lk([ 1, 1, 1, 1 ]))  // 0
console.log(lk([1,3,5,7,9,11,13,15,17]))  // 0
console.log(lk([ 1, 2, 3, 4 ]))  // 2
console.log(lk([ 1, 2, 3, 3, 3, 3, 3, 3 ]))  // 7
console.log(lk([ 1, 3, 2, 2, 5, 2, 3, 7 ]))  // 5

export {
    lk
}
