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

// const root: TreeNode = {
//     val: 4,
//     left: {
//         val: 2,
//         left: {
//             val: 1,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 3,
//             left: null,
//             right: null
//         }
//     },
//     right: {
//         val: 6,
//         left: {
//             val: 5,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 7,
//             left: null,
//             right: null
//         }
//     }
// }

function lk(nums: number[]): TreeNode {
    const fork2 = (l: number, r: number) => {
        switch(r - l) {
            case 0:
                return new TreeNode(nums[l])
            case 1:
                const root1 = new TreeNode(nums[l])
                root1.right = new TreeNode(nums[r])
                return root1
            case 2:
                const root2 = new TreeNode(nums[l + 1])
                root2.left = new TreeNode(nums[l])
                root2.right = new TreeNode(nums[r])
                return root2
            default:
                if((r - l) % 2 === 0) {
                    const root_odd = new TreeNode(nums[(l + r) / 2])
                    root_odd.left = fork2(l, (l + r) / 2 - 1)
                    root_odd.right = fork2((l + r) / 2 + 1, r)
                    return root_odd
                }
                else {
                    const root_even = new TreeNode(nums[(l + r - 1) / 2])
                    root_even.left = fork2(l, (l + r - 1) / 2 - 1)
                    root_even.right = fork2((l + r - 1) / 2 + 1, r)
                    return root_even
                }
        }
    }

    return fork2(0, nums.length - 1)
}

console.log(lk([ 1, 2, 3, 4, 5, 6, 7 ]))

// 1 2 3 4 5 6 7

// const showTime = (fn: () => void) => {
//     console.time('fn')
//     fn()
//     console.timeEnd('fn')
// }
// showTime(() => {
//     console.log(lk('pale', 'ple'))
// })

export {
    lk
}
