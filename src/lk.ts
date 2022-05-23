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

function lk(forest: number[][]): number {
    const y_len = forest.length
    const x_len = forest[0].length

    // 先遍历一次 forest, 找出砍树的点位顺序
    const in_order: [ number, number ][] = []
    for (let y = 0; y < y_len; y++) {
        for (let x = 0; x < x_len; x++) {
            if(forest[y][x] > 1) in_order.push([ x, y ])
        }
    }

    in_order.sort((a, b) => forest[a[1]][a[0]] - forest[b[1]][b[0]])

    // 用 bfs 方法找出从 from 到 to 的步数, 若无法到达则返回 -1
    const bfs = (from: [ x: number, y: number ], to: [ x: number, y: number ]): number => {
        // 原地
        if(from[0] === to[0] && from[1] === to[1]) return 0
        // 1 <= x, y <= 50, 用 100x+y 表示点位
        const visited_in_loop = new Set<number>()

        const loop = [ [ ...from, 0 ] ]

        let curr: number[]
        while (loop.length > 0) {
            curr = loop.shift()!

            visited_in_loop.add(100 * curr[0] + curr[1])

            if(curr[1] - 1 >= 0 && forest[curr[1] - 1][curr[0]] > 0 && !visited_in_loop.has(100 * curr[0] + curr[1] - 1)) {
                if(curr[0] === to[0] && curr[1] - 1 === to[1]) return curr[2] + 1
                loop.push([ curr[0], curr[1] - 1, curr[2] + 1 ])
                visited_in_loop.add(100 * curr[0] + curr[1] - 1)
            }
            if(curr[1] + 1 < y_len && forest[curr[1] + 1][curr[0]] > 0 && !visited_in_loop.has(100 * curr[0] + curr[1] + 1)) {
                if(curr[0] === to[0] && curr[1] + 1 === to[1]) return curr[2] + 1
                loop.push([ curr[0], curr[1] + 1, curr[2] + 1 ])
                visited_in_loop.add(100 * curr[0] + curr[1] + 1)
            }
            if(curr[0] - 1 >= 0 && forest[curr[1]][curr[0] - 1] > 0 && !visited_in_loop.has(100 * (curr[0] - 1) + curr[1])) {
                if(curr[0] - 1 === to[0] && curr[1] === to[1]) return curr[2] + 1
                loop.push([ curr[0] - 1, curr[1], curr[2] + 1 ])
                visited_in_loop.add(100 * (curr[0] - 1) + curr[1])
            }
            if(curr[0] + 1 < x_len && forest[curr[1]][curr[0] + 1] > 0 && !visited_in_loop.has(100 * (curr[0] + 1) + curr[1])) {
                if(curr[0] + 1 === to[0] && curr[1] === to[1]) return curr[2] + 1
                loop.push([ curr[0] + 1, curr[1], curr[2] + 1 ])
                visited_in_loop.add(100 * (curr[0] + 1) + curr[1])
            }
        }

        return -1
    }

    let step = bfs([ 0, 0 ], in_order[0])

    if(step === -1) return -1

    let total_step = step

    // console.log(in_order)
    for (let i = 1; i < in_order.length; i++) {
        step = bfs(in_order[i - 1], in_order[i])

        // console.log(in_order[i - 1], ' to ', in_order[i], '; step: ', step)

        if(step === -1) return -1
        else total_step += step
    }

    return total_step
}

// console.log(lk([ [ 1, 2, 3 ], [ 0, 0, 4 ], [ 7, 6, 5 ] ]))
// console.log(lk([ [ 2, 3, 4 ], [ 0, 0, 5 ], [ 8, 7, 6 ] ]))
console.log(lk([
    [ 54581641, 64080174, 24346381, 69107959 ],
    [ 86374198, 61363882, 68783324, 79706116 ],
    [ 668150, 92178815, 89819108, 94701471 ],
    [ 83920491, 22724204, 46281641, 47531096 ],
    [ 89078499, 18904913, 25462145, 60813308 ]
]))

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
