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

function lk(nums: number[], target: number): number {
    let [ l, r ] = [ 0, nums.length - 1 ]

    while (l < r) {
        const mid = Math.floor((l + r) / 2)
        if(nums[mid] === target) return mid
        else if(nums[mid] > target) r = mid - 1
        else if(nums[mid] < target) l = mid + 1
    }

    if(l === r && nums[l] === target) return l

    return -1
}

class KthLargest {
    hash: (number | undefined)[] = []

    constructor() {
    }

    put(key: number, value: number): void {
        this.hash[key] = value
    }

    get(key: number): number {
        return this.hash[key] === undefined ? -1 : this.hash[key]!
    }

    remove(key: number): void {
        this.hash[key] = -1
    }
}

export {
    lk
}
