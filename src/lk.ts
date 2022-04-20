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

function lk(ransomNote: string, magazine: string): boolean {
    const material: Map<string, number> = new Map()

    for(let i = 0; i < magazine.length; i ++) {
        material.set(magazine[i], material.has(magazine[i]) ? material.get(magazine[i])! + 1 : 1)
    }

    for (let j = 0; j < ransomNote.length; j ++) {
        if(!material.has(ransomNote[j]) || (material.get(ransomNote[j])! <= 0)) return false
        else {
            material.set(ransomNote[j], material.get(ransomNote[j])! - 1)
        }
    }

    return true
}

export {
    // lk
}

// console.log(lk("file1.txt\nfile2.txt\nlongfile.txt"))

// fs.writeFileSync('./res.json', JSON.stringify(lk(139)), { encoding: 'utf-8' })
