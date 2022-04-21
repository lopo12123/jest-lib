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

function lk(s: string, t: string): string {
    if(s === '') return t
    else {
        let sum = 0
        for(let i = 0; i < s.length; i ++) {
            sum -= s[i].charCodeAt(0)
        }
        for(let j = 0; j < t.length; j ++) {
            sum += t[j].charCodeAt(0)
        }
        return String.fromCharCode(sum)
    }
}

export {
    // lk
}

// console.log(lk("file1.txt\nfile2.txt\nlongfile.txt"))

// fs.writeFileSync('./res.json', JSON.stringify(lk(139)), { encoding: 'utf-8' })
