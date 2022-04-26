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

function lk(num1: string, num2: string): string {
    const [ l1, l2 ] = [ num1.length, num2.length ]
    const l = Math.max(l1, l2)

    const res: number[] = []
    let plus = 0

    let i = 0
    while (i < l) {
        const sum = parseInt(num1[l1 - 1 - i] ?? '0') + parseInt(num2[l2 - 1 - i] ?? '0')
        res.unshift(sum % 10)
        plus = ~~(sum / 10)

        i++
    }

    if(plus === 1) res.unshift(1)

    return res.join('')
}

export {
    // lk
}
