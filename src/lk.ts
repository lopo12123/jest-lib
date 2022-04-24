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

function lk(s: string): number {
    // 约定状态:
    // >=0 第一次出现的下标
    // -1 有重复
    const map = new Map()

    for(let i = 0; i < s.length; i ++) {
        if(map.has(s[i])) {
            map.set(s[i], -1)
        }
        else {
            map.set(s[i], i)
        }
    }

    console.log(map)

    let minIndex = s.length
    map.forEach((val, key) => {
        if(val >= 0 && val < minIndex) minIndex = val
    })

    return minIndex === s.length ? -1 : minIndex
}

export {
    // lk
}

console.log(lk('aabb'))
// console.log(lk('loveleetcode'))
