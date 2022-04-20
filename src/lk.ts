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

const guess = (num: number): number => {return 0}

function lk(n: number): number {
    let [l, r] = [1, n]
    let myGuess = ~~((l + r) / 2)

    let myGuessRes = guess(myGuess)
    while (myGuessRes !== 0) {
        if(myGuessRes === 1) l = myGuess + 1
        else r = myGuess - 1
        myGuess = ~~((l + r) / 2)
        myGuessRes = guess(myGuess)
    }

    return myGuess
}

export {
    // lk
}

// console.log(lk("file1.txt\nfile2.txt\nlongfile.txt"))

// fs.writeFileSync('./res.json', JSON.stringify(lk(139)), { encoding: 'utf-8' })
