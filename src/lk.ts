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

class StateNode {
    cx: number
    cy: number
    mx: number
    my: number
    /**
     * turn 0-cat; 1-mouse
     */
    turn: 0 | 1
    from: Set<StateNode>
    to: number

    ifWin: null | boolean = null

    /**
     * @param cx
     * @param cy
     * @param mx
     * @param my
     * @param turn 0-cat; 1-mouse
     */
    constructor(cx: number, cy: number, mx: number, my: number, turn: 0 | 1) {
        this.cx = cx
        this.cy = cy
        this.mx = mx
        this.my = my
        this.turn = turn
        this.from = new Set<StateNode>()
        this.to = 0
    }
}
function lk(grid: string[], catJump: number, mouseJump: number): boolean {
    // '#'     '.'     'C'     'M'     'F'
    // wall    ground   cat    mouse   food
    // return: mouse win - true; cat win - false

    const x_len = grid[0].length, y_len = grid.length

    // region 找到各个坐标
    let cx: number, cy: number, mx: number, my: number, fx: number, fy: number
    for (let y = 0; y < y_len; y++) {
        for (let x = 0; x < x_len; x++) {
            if(grid[y][x] === 'C') {
                cx = x
                cy = y
            }
            else if(grid[y][x] === 'M') {
                mx = x
                my = y
            }
            else if(grid[y][x] === 'F') {
                fx = x
                fy = y
            }
        }
    }
    // endregion

    // region 存储所有状态 tuple_map[cx][cy][mx][my][turn] (turn: 0-cat; 1-mouse)
    const tuple_map: (StateNode | null)[][][][][] = new Array(x_len).fill(0)
        .map((_, _cx) => new Array(y_len).fill(0)
            .map((_, _cy) => new Array(x_len).fill(0)
                .map((_, _mx) => new Array(y_len).fill(0)
                    .map((_, _my) => {
                            let two: (null | StateNode)[] = []
                            if(_cx === fx && _cy === fy && _mx === fx && _my === fy) return [ null, null ]
                            else if(grid[_cy][_cx] === '#' || grid[_my][_mx] === '#') return [ null, null ]
                            // 老鼠在上一次操作之后到达了食物，因此只需要记录轮到猫行动的这个状态
                            else if(_mx === fx && _my === fy) return [ new StateNode(_cx, _cy, _mx, _my, 0), null ]
                            // 猫在上一次操作之后到达了食物，因此只需要记录轮到老鼠行动的这个状态
                            else if(_cx === fx && _cy === fy) return [ null, new StateNode(_cx, _cy, _mx, _my, 1) ]
                            else {
                                return [ new StateNode(_cx, _cy, _mx, _my, 0), new StateNode(_cx, _cy, _mx, _my, 1) ]
                            }
                        }
                    )
                )
            )
        )
    // endregion

    // region 预处理
    tuple_map.flat(4).forEach(node => {
        if(node !== null) {
            if(node.cx === fx && node.cy === fy) return;
            if(node.mx === fx && node.my === fy) return;
            if(node.mx === node.cx && node.my === node.cy) return;

            let step_range: number, nowX: number, nowY: number
            if(node.turn === 0) {
                step_range = catJump
                nowX = node.cx
                nowY = node.cy
            }
            else {
                step_range = mouseJump
                nowX = node.mx
                nowY = node.my
            }

            // 找四个方向的可选项
            [ [ -1, 0 ], [ 1, 0 ], [ 0, -1 ], [ 0, 1 ] ].forEach(([ dx, dy ]) => {
                for (let dis = 1; dis <= step_range; dis++) {
                    let newX = nowX + dx * dis
                    let newY = nowY + dy * dis

                    if(newX < 0 || newX === x_len || newY < 0 || newY === y_len || grid[newY][newX] === '#') break
                    else {
                        // mouse
                        if(node.turn === 1) {
                            if(newX === node.cx && newY === node.cy) continue
                            tuple_map[node.cx][node.cy][newX][newY][0]?.from.add(node)  // 将此节点添加到去向的from中
                        }
                        else {
                            tuple_map[newX][newY][node.mx][node.my][1]?.from.add(node)
                        }
                        node.to += 1  // 当前节点增加一个去向选择
                    }
                }
            })

            // 可以选择原地不动
            node.to += 1
            tuple_map[node.cx][node.cy][node.mx][node.my][1 - node.turn]?.from.add(node)
        }
    })
    // endregion

    // region 找到结束状态
    let round = 0
    let q: StateNode[] = []
    for (let node of tuple_map.flat(4)) {
        if(node !== null && (node.cx === fx! && node.cy === fy! || node.mx === fx! && node.my === fy!)) {
            node.ifWin = false
            q.push(node)
        }
    }
    // endregion

    // 模拟
    while (round < 1000 && q.length > 0) {
        round += 1

        let nextQ: StateNode[] = []

        q.forEach(node => {
            // 当前为false - 则上一个状态直接为true
            if(!node.ifWin) {
                node.from.forEach(pre_node => {
                    if(pre_node.ifWin === null) {
                        pre_node.ifWin = true
                        nextQ.push(pre_node)
                    }
                })
            }
            // 当前为true
            else {
                node.from.forEach(pre_node => {
                    // 可选项 -1
                    pre_node.to -= 1
                    // 无可选项剩余 - 则为false
                    if(pre_node.to === 0) {
                        pre_node.ifWin = false
                        nextQ.push(pre_node)
                    }
                })
            }
        })

        q = nextQ
    }

    return !!tuple_map[cx!][cy!][mx!][my!][1]!.ifWin
}

console.time('k')
console.log(lk([
    '####F',
    '#C...',
    'M....'
], 1, 2))
console.timeEnd('k')

export {
    lk
}
