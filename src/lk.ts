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


function lk(input: string): number {
    const items = input.split('\n')

    let maxLength = 0
    let midDirs: number[] = []
    midDirs[-1] = -1

    for (let i = 0; i < items.length; i++) {
        let depth = (items[i].match(/\t/g) ?? []).length
        midDirs[depth] = items[i].replace(/\t/g, '').length + (depth === 0 ? 0 : midDirs[depth - 1] + 1)
        midDirs.length = depth + 1

        if(items[i].includes('.')) {
            maxLength = Math.max(maxLength, midDirs[midDirs.length - 1])
        }
    }

    return maxLength
}

export {
    // lk
}

console.log(lk("dir\n        file.txt"))
console.log(lk("dir\n    file.txt"))
// console.log(lk("file1.txt\nfile2.txt\nlongfile.txt"))

// fs.writeFileSync('./res.json', JSON.stringify(lk(139)), { encoding: 'utf-8' })
