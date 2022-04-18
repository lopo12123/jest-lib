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


function lk(isBadVersion: (n: number) => boolean): (n: number) => number {
    return (n) => {
        if(isBadVersion(1)) return 1

        let left = 1, right = n;

        while (1) {
            let mid = ~~((left + right) / 2)
            if(isBadVersion(mid)) {
                if(!isBadVersion(mid - 1)) return mid
                right = mid - 1
            }
            else {
                left = mid + 1
            }
        }

        return 0
    }
}

export {
    // lk
}

// fs.writeFileSync('./res.json', JSON.stringify(lk(139)), { encoding: 'utf-8' })
