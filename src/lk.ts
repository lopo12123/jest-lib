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

function lk(sentence: string): string {
    const set = new Set([ 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' ])
    const words: string[] = sentence.split(' ')

    for (let i = 0; i < words.length; i++) {
        words[i] = (
            set.has(words[i][0])
                ? words[i]
                : words[i].slice(1) + words[i][0]
        ) + 'ma'.padEnd(i + 3, 'a')
    }

    return words.join(' ')
}

export {
    // lk
}

// console.log(lk("file1.txt\nfile2.txt\nlongfile.txt"))

// fs.writeFileSync('./res.json', JSON.stringify(lk(139)), { encoding: 'utf-8' })
