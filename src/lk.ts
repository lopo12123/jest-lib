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


function lk(paragraph: string, banned: string[]): string {
    const list = paragraph
        .replace(/[^a-zA-Z]/g, ' ')
        .replace(/[ ]+/g, ' ')
        .toLowerCase()
        .split(' ')

    const map = new Map<string, number>()

    let max = 0, maxStr = ''
    for (let i = 0; i < list.length; i ++) {
        if(banned.includes(list[i])) continue
        map.has(list[i])
            ? map.set(list[i], map.get(list[i])! + 1)
            : map.set(list[i], 1)

        if(max < map.get(list[i])!) {
            max = map.get(list[i])!
            maxStr = list[i]
        }
    }
    return maxStr
}

export {
    // lk
}
