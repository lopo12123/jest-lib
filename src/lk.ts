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

function lk(expression: string): number[] {
    const nums = expression
        .split(/[\-+*]/g)
        .map(x => parseInt(x))
    const operators = expression
        .match(/[\-+*]/g) as ('+' | '-' | '*')[] | null

    if(operators === null) return nums
    else {
        const do_op = (left: number, right: number, op: '+' | '-' | '*') => {
            return op === '+'
                ? left + right
                : op === '-'
                    ? left - right
                    : left * right
        }

        const partial_solve = (left_idx: number, right_idx: number, separate_idx: number): number[] => {
            const left_nums = nums.slice(left_idx, separate_idx)
            const right_nums = nums.slice(separate_idx, right_idx)

            let left_results: number[] = []
            let right_results: number[] = []

            if(left_nums.length === 1) left_results = left_nums
            else for (let i = 1; i < left_nums.length; i++) {
                left_results.push(...partial_solve(left_idx, separate_idx, left_idx + i))
            }
            if(right_nums.length === 1) right_results = right_nums
            else for (let j = 1; j < right_nums.length; j++) {
                right_results.push(...partial_solve(separate_idx, right_idx, separate_idx + j))
            }

            const results: number[] = []
            for (let i = 0; i < left_results.length; i++) {
                for (let j = 0; j < right_results.length; j++) {
                    results.push(do_op(left_results[i], right_results[j], operators[separate_idx - 1]))
                }
            }
            return results
        }

        const results: number[] = []
        for (let i = 1; i < nums.length; i++) {
            results.push(...partial_solve(0, nums.length, i))
        }
        return results
    }
}

console.log(lk('2-1-1'))
console.log(lk('2*3-4*5'))

export {
    lk
}
