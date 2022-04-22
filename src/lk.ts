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

function lk(nums: number[]): number {
    const n = nums.length
    let max = 0, Sn = 0, Tn = nums.reduce((prev, curr, index) => {
        Sn += curr
        return prev + curr * index
    }, 0)

    nums.reduce((prevTn, curr, index) => {
        if(index === 0) {
            max = Tn
            return Tn
        }
        else {
            max = Math.max(max, Tn += (n * nums[index - 1] - Sn))
        }
        return Tn
    }, 0)

    return max
}

export {
    // lk
}

// console.log(lk("file1.txt\nfile2.txt\nlongfile.txt"))

// fs.writeFileSync('./res.json', JSON.stringify(lk(139)), { encoding: 'utf-8' })
