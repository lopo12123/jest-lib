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

function lk(start: string, end: string, bank: string[]): number {
    const diff = (a: string, b: string) => {
        if(a.length !== b.length) return -1

        let count = 0
        for (let i = 0; i < a.length; i++) {
            if(a[i] !== b[i]) count += 1
        }
        return count
    }

    const bankSet = new Set(bank)

    // 如果end是无效的直接返回-1
    if(!bankSet.has(end)) return -1

    // 将起始串加入set, 开始构建树
    bankSet.add(start)

    const pool: (string | null)[] = [ end ]
    let mutCount = 0
    let layerEnd: boolean = true

    while (bankSet.size > 0 && pool.length > 0) {
        if(pool[0] === null) {
            layerEnd = true
            mutCount += 1
            pool.shift()
            continue
        }

        if(layerEnd) {
            layerEnd = false
            pool.push(null)
        }

        for (let str of bankSet) {
            if(diff(str, pool[0]) === 1) {
                if(str === start) return mutCount + 1
                else {
                    pool.push(str)
                    bankSet.delete(str)
                }
            }
        }
        pool.shift()
    }

    return -1
}

export {
    lk
}
