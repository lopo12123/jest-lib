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

const showTime = (fn: () => void) => {
    console.time('fn')
    fn()
    console.timeEnd('fn')
}

function lk(nums: number[], target: number): number[][] {
    const len = nums.length
    const pool: number[][] = []

    nums.sort((a, b) => a - b)

    const find = (l: number, r: number, need: number): number | null => {
        if(need === nums[l] || need === nums[r]) return need
        if(need < nums[l] || need > nums[r]) return null

        let mid = Math.floor((l + r) / 2)
        while (l < r) {
            if(nums[mid] === need) return need
            else if(nums[mid] < need) {
                l = mid + 1
            }
            else {
                r = mid - 1
            }
            mid = Math.floor((l + r) / 2)
        }
        return null
    }

    for (let a = 0; a < len - 3; a++) {
        for (let b = a + 1; b < len - 2; b++) {
            for (let c = b + 1; c < len - 1; c++) {
                const d_should_be = find(c + 1, len - 1, target - nums[a] - nums[b] - nums[c])
                if(d_should_be !== null
                    && !(
                        nums[a] === pool.at(-1)?.[0]
                        && nums[b] === pool.at(-1)?.[1]
                        && nums[c] === pool.at(-1)?.[2]
                        && d_should_be === pool.at(-1)?.[3]
                    )
                ) {
                    pool.push([ nums[a], nums[b], nums[c], d_should_be ])
                }
            }
        }
    }

    return pool
}

export {
    lk
}
