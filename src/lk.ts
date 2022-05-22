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

function lk(maxChoosableInteger: number, desiredTotal: number): boolean {
    // 第一下直接获胜
    if(maxChoosableInteger >= desiredTotal) return true
    // 永远无法到达
    else if((1 + maxChoosableInteger) * maxChoosableInteger / 2 < desiredTotal) return false
    else {
        const state_pool = new Map<number, boolean>()
        const dfs = (curr_state: number, curr_sum: number): boolean => {
            // 已经搜过
            if(state_pool.has(curr_state)) return state_pool.get(curr_state)!
            else {
                for (let i = 0; i < maxChoosableInteger; i++) {
                    // 某个数字没有被选过
                    if((curr_state >> i & 1) === 0) {
                        // 选中当前数字可以获胜
                        if(curr_sum + (i + 1) >= desiredTotal || !dfs(curr_state | (1 << i), curr_sum + (i + 1))) {
                            state_pool.set(curr_state, true)
                            return true
                        }
                    }
                }
                // 如果全都不能赢则返回false
                state_pool.set(curr_state, false)
                return false
            }
        }

        return dfs(0, 0)
    }
}

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
