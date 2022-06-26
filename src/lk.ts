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

// class Node {
//     val: number
//     next: Node | null
//
//     constructor(val?: number, next?: Node) {
//         this.val = (val === undefined ? 0 : val);
//         this.next = (next === undefined ? null : next);
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

function lk(costs: number[][]): number {
    let cost_till_now = costs[0]

    for (let i = 1; i < costs.length; i++) {
        cost_till_now = [
            Math.min(cost_till_now[1], cost_till_now[2]) + costs[i][0],
            Math.min(cost_till_now[0], cost_till_now[2]) + costs[i][1],
            Math.min(cost_till_now[0], cost_till_now[1]) + costs[i][2],
        ]
    }

    return Math.min(...cost_till_now)
}

class Solution {
    #valid_max
    #mapper = new Map()

    constructor(n: number, blacklist: number[]) {
        let valid_max = n - blacklist.length
        this.#valid_max = valid_max

        blacklist.sort((a, b) => a - b)
        let map_to = n - 1
        let p_tail = blacklist.length - 1
        for (let i = 0; i < blacklist.length; i++) {
            if(blacklist[i] >= valid_max) return
            else {
                while (blacklist[p_tail] === map_to) {
                    map_to -= 1
                    p_tail -= 1
                }
                this.#mapper.set(blacklist[i], map_to)
                map_to -= 1
            }
        }
    }

    #last_pick = -1

    pick(): number {
        // if(this.#last_pick === -1) console.log(this.#valid_max, this.#mapper)
        this.#last_pick = (this.#last_pick + 1) % this.#valid_max
        return this.#mapper.get(this.#last_pick) ?? this.#last_pick
    }
}

const aa = new Solution(4, [ 2, 1 ])
console.log(aa.pick())
console.log(aa.pick())
console.log(aa.pick())
console.log(aa.pick())
// const aa = new Solution(1000000000, [654321654])

export {
    lk
}
