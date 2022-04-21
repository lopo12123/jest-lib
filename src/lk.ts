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

function lk(nums1: number[], nums2: number[]): number[] {
    const res: number[] = []

    const set1 = new Set(nums1)
    const set2 = new Set(nums2)

    let more = set1.size > set2.size ? set1 : set2
    let less = set1.size > set2.size ? set2 : set1

    for (let num of less) {
        if(more.has(num)) res.push(num)
    }

    return res
}

export {
    // lk
}

// console.log(lk("file1.txt\nfile2.txt\nlongfile.txt"))

// fs.writeFileSync('./res.json', JSON.stringify(lk(139)), { encoding: 'utf-8' })
