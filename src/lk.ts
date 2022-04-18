import * as fs from "fs";

class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

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


function lk(n: number): number[] {
    if(n <= 9) return (new Array(n)).fill(undefined).map((item, index) => index + 1)

    const res: number[] = []

    const add = (ori: number) => {
        for (let i = 0; i <= 9; i++) {
            if(ori * 10 + i >= 1 && ori * 10 + i <= n) {
                res.push(ori * 10 + i)
                add(ori * 10 + i)
            }
        }
    }

    for (let i = 1; i <= 9; i++) {
        res.push(i)
        add(i)
    }

    return res
}

export {
    // lk
}
console.log(lk(2))
// fs.writeFileSync('./res.json', JSON.stringify(lk(139)), { encoding: 'utf-8' })
