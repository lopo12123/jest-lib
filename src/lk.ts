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

function lk(trees: [ number, number ][]): number[][] {
    // 小于三个点 - 直接返回全部
    if(trees.length < 4) return trees

    // 排序
    trees.sort((a, b) => {
        return a[0] === b[0] ? (a[1] - b[1]) : (a[0] - b[0])
    })

    // 左转 - k变大 正; 右转 - k变小 负; 共线 - k相同 零
    const leftOrRight = (a: [ number, number ], b: [ number, number ], c: [ number, number ]) => {
        if(a[0] === b[0] && b[0] === c[0]) return 0
        return (c[1] - b[1]) / (c[0] - b[0]) - (b[1] - a[1]) / (b[0] - a[0])
    }

    // 一条竖线上 - 直接返回全部
    if(trees[0][0] === trees[trees.length - 1][0]) return trees

    // 分别找到上半和下半的第一个点 并划分上、下、在线上
    const crossk = (trees[trees.length - 1][1] - trees[0][1]) / (trees[trees.length - 1][0] - trees[0][0])
    const overview: {
        up: [ number, number ] | null, upk: number, upTrees: [ number, number ][],
        down: [ number, number ] | null, downk: number, downTrees: [ number, number ][],
        online: [ number, number ][]
    } = {
        up: null, upk: crossk, upTrees: [],
        down: null, downk: crossk, downTrees: [],
        online: []
    }
    for (let i = 1; i < trees.length - 1; i++) {
        const k = (trees[i][1] - trees[0][1]) / (trees[i][0] - trees[0][0])
        if(k === crossk) overview.online.push(trees[i])
        else if(k > crossk) {
            overview.upTrees.push(trees[i])
            if(k > overview.upk) {
                overview.up = trees[i]
                overview.upk = k
                overview.upTrees = [trees[i]]
            }
        }
        else {
            overview.downTrees.push(trees[i])
            if(k < overview.downk) {
                overview.down = trees[i]
                overview.downk = k
                overview.downTrees = [trees[i]]
            }
        }
    }

    if(overview.upTrees.length === 1 && overview.downTrees.length === 1) return [trees[0], overview.upTrees[0], overview.downTrees[0], trees[trees.length - 1]]

    // 共线 - 直接返回全部
    if(overview.upTrees.length === 0 && overview.downTrees.length === 0) return trees

    // 找上半
    const resUp: [ number, number ][] = [ trees[0] ]
    // 上半有节点
    if(overview.up !== null) {
        resUp.push(overview.up)
        // 上半有至少两个点 - 则需要判断
        if(overview.upTrees.length > 1) {
            overview.upTrees.push(trees[trees.length - 1])
            for (let i = 0; i < overview.upTrees.length; i++) {
                if(overview.upTrees[i][0] === overview.up[0] && overview.upTrees[i][1] === overview.up[1]) continue
                else if(overview.upTrees[i][0] < overview.up[0]) continue
                else {
                    if(leftOrRight(resUp[resUp.length - 2], resUp[resUp.length - 1], overview.upTrees[i]) > 0) {
                        resUp.pop()
                        i--
                    }
                    else {
                        resUp.push(overview.upTrees[i])
                    }
                }
            }
        }
    }

    // 找下半
    const resDown: [ number, number ][] = [ trees[0] ]
    // 下半有节点
    if(overview.down !== null) {
        resDown.push(overview.down)
        // 下半有至少两个点 - 则需要判断
        if(overview.downTrees.length > 1) {
            overview.downTrees.push(trees[trees.length - 1])
            for (let j = 0; j < overview.downTrees.length; j++) {
                if(overview.downTrees[j][0] === overview.down[0] && overview.downTrees[j][1] === overview.down[1]) continue
                else if(overview.downTrees[j][0] < overview.down[0]) continue
                else {
                    if(leftOrRight(resDown[resDown.length - 2], resDown[resDown.length - 1], overview.downTrees[j]) < 0) {
                        resDown.pop()
                        j--
                    }
                    else {
                        resDown.push(overview.downTrees[j])
                    }
                }
            }
        }
    }

    // 移除重复的 第一个节点
    resDown.shift()
    // 移除添加了两次的 最后一个节点
    if(overview.upTrees.length > 1 && overview.downTrees.length > 1) resDown.pop()

    if(overview.up === null || overview.down === null) {
        resUp.push(...overview.online)
    }

    console.log('uptree: ', overview.upTrees, 'up: ', overview.up)
    console.log('downtree: ', overview.downTrees, 'down: ', overview.down)
    console.log(overview.online)

    return [ ...resUp, ...resDown ]
}

export {
    // lk
}

// console.log(lk([[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]))
// console.log(lk([[0,0],[0,100],[100,100],[100,0]]))
// console.log(lk([[0,0],[0,100],[50,50],[100,0],[100,100]]))
console.log(lk([[0,0],[1,1],[2,2],[1,2],[2,4]]))
// console.log(lk([[3,3],[2,4],[2,2],[7,4],[3,4]]))
// console.log(lk([[5,5],[4,8],[1,3],[5,9],[3,0],[0,4],[3,2],[8,9],[9,3]]))
// console.log(lk([[0,0],[1,0],[1,3],[1,8],[1,9],[2,0],[2,6],[3,0],[3,1],[3,4],[3,6],[4,2],[4,6],[5,7],[5,8],[6,2],[6,4],[7,7],[7,9],[8,0],[8,1],[8,3],[8,5],[9,6]]))
