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


function lk(s: string, t: string): boolean {
    if(s.length !== t.length) return false

    const hash: {[k: string]: number} = {}

    for (let i = 0; i < s.length; i ++) {
        hash[s[i]] === undefined
            ? (hash[s[i]] = 1)
            : (hash[s[i]] += 1)
    }
    for (let j = 0; j < t.length; j ++) {
        hash[t[j]] === undefined
            ? (hash[t[j]] = -1)
            : (hash[t[j]] -= 1)
    }

    console.log(hash)

    return Object.values(hash).findIndex((item) => {return item !== 0}) === -1
}

console.log(lk('rat', 'car'))

export {
    // lk
}
