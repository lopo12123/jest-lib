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

function lk(n: number): string[] {
    const res: string[] = []

    for(let i = 1; i <= n; i ++) {
        if(i % 15 === 0) res.push('FizzBuzz')
        else if(i % 5 === 0) res.push('Buzz')
        else if(i % 3 === 0) res.push('Fizz')
        else res.push(i+1+'')
    }

    return res
}

export {
    // lk
}
