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

function lk(root: TreeNode | null): number[] {
    let res: number[] = []

    if(root === null) return []

    let max = 0, currCount = 0, lastNum = root.val
    const dfs = (subRoot: TreeNode | null) => {
        if(subRoot === null) return
        else {
            dfs(subRoot.left)

            if(subRoot.val === lastNum) currCount += 1
            else {
                if(max === currCount) {
                    res.push(lastNum)
                }
                else if(max < currCount) {
                    max = currCount
                    res = [lastNum]
                }
                lastNum = subRoot.val
                currCount = 1
            }

            dfs(subRoot.right)
        }
    }
    dfs(root)

    // 如果众数在末尾则没有结束判断
    if(max === currCount) {
        res.push(lastNum)
    }
    else if(max < currCount) {
        max = currCount
        res = [lastNum]
    }

    return res
}

export {
    lk
}

const test: TreeNode = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: {
            val: 2,
            left: null,
            right: null
        },
        right: null
    }
}

console.log(lk(test))
