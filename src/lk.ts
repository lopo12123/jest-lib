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

function lk(heights: number[][]): [ r: number, c: number ][] {
    const [ xL, yL ] = [ heights[0].length, heights.length ]

    const toOcean: Set<string>[] = [ new Set(), new Set() ]

    const findSource = (to: 0 | 1, currentH: number, [ x, y ]: [ number, number ]) => {
        if(y > 0 && !toOcean[to].has(`${ y - 1 },${ x }`) && heights[y - 1][x] >= currentH) {
            toOcean[to].add(`${ y - 1 },${ x }`)
            findSource(to, heights[y - 1][x], [ x, y - 1 ])
        }
        if(y < yL - 1 && !toOcean[to].has(`${ y + 1 },${ x }`) && heights[y + 1][x] >= currentH) {
            toOcean[to].add(`${ y + 1 },${ x }`)
            findSource(to, heights[y + 1][x], [ x, y + 1 ])
        }
        if(x > 0 && !toOcean[to].has(`${ y },${ x - 1 }`) && heights[y][x - 1] >= currentH) {
            toOcean[to].add(`${ y },${ x - 1 }`)
            findSource(to, heights[y][x - 1], [ x - 1, y ])
        }
        if(x < xL - 1 && !toOcean[to].has(`${ y },${ x + 1 }`) && heights[y][x + 1] >= currentH) {
            toOcean[to].add(`${ y },${ x + 1 }`)
            findSource(to, heights[y][x + 1], [ x + 1, y ])
        }
    }

    // 上 r = 0 c = [0..xL]
    for (let c1 = 0; c1 < xL; c1++) {
        toOcean[0].add(`${ 0 },${ c1 }`)
        findSource(0, heights[0][c1], [ c1, 0 ])
    }
    // 左 c = 0 r = [0..n]
    for (let r1 = 0; r1 < yL; r1++) {
        toOcean[0].add(`${ r1 },${ 0 }`)
        findSource(0, heights[r1][0], [ 0, r1 ])
    }
    // 下 r = yL - 1 c = [0..m]
    for (let c2 = 0; c2 < xL; c2++) {
        toOcean[1].add(`${ yL - 1 },${ c2 }`)
        findSource(1, heights[yL - 1][c2], [ c2, yL - 1 ])
    }
    // 右 c = xL - 1 r = [0..n]
    for (let r2 = 0; r2 < yL; r2++) {
        toOcean[1].add(`${ r2 },${ xL - 1 }`)
        findSource(1, heights[r2][xL - 1], [ xL - 1, r2 ])
    }

    const common: [ number, number ][] = []
    for (let area of toOcean[0]) {
        if(toOcean[1].has(area)) common.push(area.split(',').map(x => parseInt(x)) as [number, number])
    }
    return common
}

export {
    lk
}

// console.log(lk( [[1,2], [4,3]]))
// console.log(lk([ [ 1, 2, 2, 3, 5 ], [ 3, 2, 3, 4, 4 ], [ 2, 4, 5, 3, 1 ], [ 6, 7, 1, 4, 5 ], [ 5, 1, 1, 2, 4 ] ]))
// [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]