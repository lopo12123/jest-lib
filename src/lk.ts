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


function lk(s: string): string {
    const ss = s.split('')
    let [l, r] = [0, s.length - 1]

    const hash = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])

    while (l < r) {
        if(hash.has(ss[l]) && hash.has(ss[r])) {
            [ss[l], ss[r]] = [ss[r], ss[l]]
            l ++
            r --
        }
        else {
            if(!hash.has(ss[l])) l ++
            if(!hash.has(ss[r])) r --
        }
    }

    return ss.join('')
}

export {
    // lk
}

// console.log(lk("file1.txt\nfile2.txt\nlongfile.txt"))

// fs.writeFileSync('./res.json', JSON.stringify(lk(139)), { encoding: 'utf-8' })
