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

function lk(nums: number[], k: number): number {
    if(nums.length === 0) return (k % 2 === 0 ? 1 : -1) * nums[0]

    let sum = nums.reduce((prev, curr) => {
        return prev + curr
    })
    nums.sort((a, b) => a - b)  // 小到大排序

    if(nums[0] >= 0) return (k % 2 === 0) ? sum : (sum - 2 * nums[0])

    let i = 0
    while (k > 0) {
        if(nums[i] < 0 && i < nums.length - 1) {
            sum -= nums[i] * 2
            i += 1
            k -= 1
        }
        else {
            sum -= (k % 2 === 0) ? 0 : Math.min(Math.abs(nums[i]), Math.abs(nums[i - 1])) * 2
            break
        }
    }

    return sum
}

// showTime(() => {
//     // console.log(lk([ 'daeabc', 'aaeb', 'abacdc' ]))
// })

export {
    lk
}
